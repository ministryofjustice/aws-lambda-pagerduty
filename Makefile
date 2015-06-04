all:
	rm aws-lambda-pagerduty.zip & npm install && zip -r aws-lambda-pagerduty.zip ./*
