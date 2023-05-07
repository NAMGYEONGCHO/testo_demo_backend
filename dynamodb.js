const AWS = require('./aws-config');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDB;

