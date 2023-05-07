require('dotenv').config();
const AWS = require('./aws-config.js');
const axios = require('axios'); // Import axios
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

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

app.get('/api/data', async (req, res) => {
  
  try {
    // Replace with your API Gateway Invoke URL
    const response = await axios.get(apiUrl+'/carbon-emission');

    console.log('Data fetched from API:', response.data); // Change this line to log response.data instead of response
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data from DynamoDB');
  }
});
