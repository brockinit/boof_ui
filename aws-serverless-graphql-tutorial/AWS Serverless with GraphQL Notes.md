Lambda
API Gateway - HTTP endpoints as a Service
DynamoDB
S3
Cognito
Certificate Manager


`aws configure`
`aws sts get-caller-identity`

npm install serverless@1.11.0

Boilerplate: `serverless create --template aws-nodejs`

Create Service Config File:
serverless.yml

if have RDS database, need to put it in a VPC


`module.exports.greet = (event, context, callback) => {
  console.log(JSON.stringify(event));
  callback(null, {message: "Hi, this function worked!"});
}`

null = error
callback will end the function

`sls deploy`

`serverless invoke --function hello`

`serverless invoke --function hello --data 'To the cloud!' --log`

View the logs in CloudWatch > Logs
Filter by 'START' to see how many times it has been started
