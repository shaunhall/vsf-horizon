set -e

DOMAIN_NAME='lyleandscott.infra.fancyfashion.site'
ROUTE_53_HOSTED_ZONE='Z04954693PUBJS45FJ3QU'
STACK_PREFIX='vue-storefront-lyleandscott'

echo '--------------------'
echo "Domain Name: $DOMAIN_NAME"
echo "Route 53 Hosted Zone: $ROUTE_53_HOSTED_ZONE"
echo '--------------------'

AUTH_USERNAME='admin'
AUTH_PASSWORD=$(echo -n $ROUTE_53_HOSTED_ZONE | base64 | head -c 20)
echo "Auth Username and password: $AUTH_USERNAME:$AUTH_PASSWORD"

AUTH_ENABLED="true"

LAMBDA_STACK_NAME="$STACK_PREFIX--lambda"
echo "Lambda Stack Name: $LAMBDA_STACK_NAME"

CERT_STACK_NAME="$STACK_PREFIX--cert"
echo "Cert Stack Name: $CERT_STACK_NAME"

S3_BUCKET_STACK_NAME="$STACK_PREFIX--s3"
echo "S3 Bucket Stack Name: $S3_BUCKET_STACK_NAME"

echo "***DEPLOYING CERTS***"
aws cloudformation deploy --template-file isr-certs.yaml --stack-name "$CERT_STACK_NAME" --parameter-overrides DomainName=$DOMAIN_NAME Route53HostedZone=$ROUTE_53_HOSTED_ZONE  --region us-east-1 --capabilities CAPABILITY_IAM
echo "***COMPLETED DEPLOYING CERTS***"

echo "***FETCHING CERT ARN***"
pip3 install boto3
CERT_ARN=$(python3 ./scripts/get_value_from_stack.py --region us-east-1 --stackname $CERT_STACK_NAME --key ISGApiCertificateARN)
echo "Cert ARN: $CERT_ARN"

echo "***DEPLOYING S3 BUCKET***"
aws cloudformation deploy --template-file isr-s3-bucket.yaml --stack-name "$S3_BUCKET_STACK_NAME" --parameter-overrides DomainName=$DOMAIN_NAME  --region eu-west-2 --capabilities CAPABILITY_IAM
echo "***COMPLETED S3 BUCKET***"

echo "***FETCHING S3 BUCKET ARN***"
S3_BUCKET_NAME=$(python3 ./scripts/get_value_from_stack.py --region eu-west-2 --stackname $S3_BUCKET_STACK_NAME --key S3BucketName)
S3_BUCKET_DOMAIN=$(python3 ./scripts/get_value_from_stack.py --region eu-west-2 --stackname $S3_BUCKET_STACK_NAME --key S3BucketDomain)
echo "S3 Bucket Name: $S3_BUCKET_NAME"
echo "S3 Domain: $S3_BUCKET_DOMAIN"

echo "RUNNING INITIAL WEBPACK BUILD"
yarn install
yarn build

aws s3 cp ./.nuxt/dist/client s3://$S3_BUCKET_NAME/ --recursive --exclude "*.json" --exclude "*.txt" --metadata-directive REPLACE --cache-control public,max-age=0,s-maxage=0,immutable
echo "***COMPLETED SENDING ASSETS***"

echo "***DEPLOYING SERVER API***"
sam build --template-file isr-sam-template.yaml
sam package --s3-bucket projx-build-eu-west-2 --region eu-west-2 --output-template-file sam-packaged.yml
sam deploy --template-file sam-packaged.yml --parameter-overrides \
  DomainName=$DOMAIN_NAME \
  Route53HostedZone=$ROUTE_53_HOSTED_ZONE \
  CertARN=$CERT_ARN \
  S3BucketDomain=$S3_BUCKET_DOMAIN \
  SiteUsername=$AUTH_USERNAME \
  SitePassword=$AUTH_PASSWORD \
  AuthEnabled=$AUTH_ENABLED \
  --stack-name $LAMBDA_STACK_NAME --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_NAMED_IAM --region eu-west-2


echo "---------------"
echo "JOB COMPLETE"
if [[ $AUTH_ENABLED == "true" ]]
then
  PREVIEW_UPLOAD_URL="https://$AUTH_USERNAME:$AUTH_PASSWORD@$DOMAIN_NAME"
  echo "UPLOAD TO: $PREVIEW_UPLOAD_URL"
else
  PREVIEW_UPLOAD_URL="https://$DOMAIN_NAME"
  echo "UPLOAD TO: $PREVIEW_UPLOAD_URL"
fi
echo "---------------"
