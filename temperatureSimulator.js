require('dotenv').config();
const awsIot = require('aws-iot-device-sdk');

const device = awsIot.device({
    keyPath: './cert/f856a33b1596db51ab53644f0b0434419a6713c963a07b1b8d9a471be7ab2fe1-private.pem.key',
    certPath: './cert/f856a33b1596db51ab53644f0b0434419a6713c963a07b1b8d9a471be7ab2fe1-certificate.pem.crt',
    caPath: './cert/AmazonRootCA1.pem',
    clientId: 'SimulatedTemperatureSensor',
    host: 'a8p6smen58lcu-ats.iot.eu-north-1.amazonaws.com',
    region: 'eu-north-1'
});

device.on('connect', function() {
    console.log('connect');
    setInterval(function() {
        const temperature = Math.floor(Math.random() * 100);
        const message = {
            temperature: temperature,
            clientType: "MQTT client"
        };
        device.publish('topic/temperature', JSON.stringify(message));
        console.log('Message Sent:', message);
    }, 5000); // change this to set the frequency of messages
});
