import boto3
import argparse

def get_value_from_stack(stack_info, key):
    if len(stack_info["Stacks"]) > 0:
        outputs = stack_info["Stacks"][0]["Outputs"]
    for output in outputs:
        if output["OutputKey"] == key:
            return output["OutputValue"]

def get_value(stack_name, key):
    client = boto3.client('cloudformation')

    stack_info = client.describe_stacks(StackName=stack_name)
    bucket_name = get_value_from_stack(stack_info=stack_info, key=key)

    return bucket_name

if __name__ == "__main__":
    argparser = argparse.ArgumentParser(fromfile_prefix_chars='@')
    argparser.add_argument('--profile',
                               help='aws profile (e.g. thg)', default=None)
    argparser.add_argument('--region',
                               help='aws region (e.g. us-east-1)', default="us-east-1")       
    argparser.add_argument('--key',
                               help='key to retrieve from the stack')    
    argparser.add_argument('--stackname',
                               help='stack name (e.g. projx-beta-coggles)')
    args = argparser.parse_args()
    boto3.setup_default_session(profile_name=args.profile, region_name=args.region)
    print(get_value(args.stackname, args.key))

