// myModule.js
const { dynamoDB } = require('./dynamodb.js');

const getDataFromDynamoDB = async () => {
    const params = {
      TableName: 'carbonEmission', // Change table name here
      ProjectionExpression: 'location_id, timestamp', // Modify the attributes you want to retrieve
    };
  
    try {
      const data = await dynamoDB.scan(params).promise();
      console.log(data.Items);
      return data.Items;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  

module.exports = { getDataFromDynamoDB };
