require('dotenv').config();
const AWS = require('./aws-config.js');
const axios = require('axios'); // Import axios
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const lambda = new AWS.Lambda();
const { getDataFromDynamoDB } = require('./service');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const apiUrl = 'https://e8oka0ryae.execute-api.eu-north-1.amazonaws.com/Demo';

/* app.get('/api/data', async (req, res) => {
  console.log('Accessing /api/data endpoint'); 
  try {
    const response = await axios.get(apiUrl+'/carbon-emission');

    console.log('Data fetched from API:', response);
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data from DynamoDB');
  }
}); */



app.get('/lambda-test', async (req, res) => {
  console.log("invoke")
  const lambdaParams = {
    FunctionName: 'getEvgoChargingStationLoc',
    InvocationType: 'RequestResponse'
  };

  lambda.invoke(lambdaParams, (err, data) => {
    if (err) {
      console.error('Error invoking Lambda function:', err);
      res.status(500).send('Error invoking Lambda function');
    } else {
      console.log('Lambda function invoked successfully:', data);
      res.send(data.Payload);
    }
  });
});
app.get('/dynamodb-data', async (req, res) => {
  const params = {
    TableName: 'carbonEmission',
  };

  dynamoDB.scan(params, (err, data) => {
    if (err) {
      console.error('Error fetching data from DynamoDB', err);
      res.status(500).send('Error fetching data from DynamoDB');
    } else {
      console.log('Data fetched from DynamoDB', data.Items);
      res.send(data.Items);
    }
  });
});

/* 
  // fetch weather data
   axios.get(`http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${process.env.LOCATION}`)
  .then(response => {
    console.log("weather");
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  }); */
