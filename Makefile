build-ExpressLambdaFunction:
	cp -r packages $(ARTIFACTS_DIR)
	cp -r scripts $(ARTIFACTS_DIR)
	cp package.json $(ARTIFACTS_DIR)
	cp tsconfig.json $(ARTIFACTS_DIR)
	yarn --cwd $(ARTIFACTS_DIR) install --production
	yarn --cwd $(ARTIFACTS_DIR) build
