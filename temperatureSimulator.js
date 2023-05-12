require('dotenv').config();
const awsIot = require('aws-iot-device-sdk');

const device = awsIot.device({
    keyPath: process.env.KEY_PATH,
    certPath: process.env.CERT_PATH,
    caPath: process.env.CA_PATH,
    clientId: process.env.CLIENT_ID,
    host: process.env.HOST,
    region: process.env.REGION
});

device.on('connect', function() {
    console.log('connect');
    setInterval(function() {
        const temperature = Math.floor(Math.random() * 100);
        const message = {
            temperature: temperature
        };
        device.publish('topic/temperature', JSON.stringify(message));
        console.log('Message Sent:', message);
    }, 5000); // change this to set the frequency of messages
});
