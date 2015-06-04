##Setup

* Create a service on pagerduty, put API key in aws-lambda-pagerduty.js.
* ```make```
* Upload zip to AWS lambda, set handler as aws-lambda-pagerduty.handler
* Create SNS topic, subscribe the topic to your AWS lamda function.
* Create some notifications and associate with the SNS topic.
