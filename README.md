progress

 done. create IAM user and usergroup and get  accessKeyId, secretAccessKey in csv format.  
done. attached an existing policy such as "AmazonDynamoDBFullAccess" to usergroup and added user to this group. now user has policy. 
done. make ev-charging-station table in dynamoDB and get  region value
done node.js server run
done aws sdk install
done setup aws-config.js (region, accessKeyId, secretAccessKey)   
done create dynamoDB client.
done check out dynamoDB interaction with nodejs server. (I put 1 item to table in dynamoDB successfully) 
done setup gateway API
done setup lambda function. 
     (doesn't work for the first time. because lambda environment in AWS console doesn't fully support node 18.x)
     1. Install AWS SDK in a new directory: On your local machine, create a new directory. Navigate into this directory in your terminal/command line and run npm install aws-sdk.      This will create a node_modules directory in your current directory with the AWS SDK installed.
    2. Zip the node_modules directory: Still in the terminal/command line, zip the node_modules directory by running zip -r node_modules.zip node_modules/. This will create a .zip file of the node_modules directory.
    3. Create a new Lambda layer in AWS console:
        ◦ Navigate to the AWS Lambda console.
        ◦ In the navigation pane, choose "Layers", then choose "Create layer".
        ◦ On the "Create layer" page, give your layer a name (for example, aws-sdk-layer).
        ◦ In the "Upload" section, choose "Upload a .zip file" and upload the node_modules.zip file you created earlier.
        ◦ For "Compatible runtimes", choose the Node.js version that you're using in your Lambda function.
        ◦ Choose "Create" to create the layer.
    4. Attach the layer to your Lambda function:
        ◦ Navigate to your Lambda function in the AWS Lambda console.
        ◦ Under the function code, you will find a section called "Layers". Choose "Add a layer".
        ◦ In the "Add layer" dialog box, choose "Custom layers". You should see the aws-sdk-layer you created earlier in the list. Select it and choose the version.
        ◦ Choose "Add" to add the layer to your function.
    5. Update your Lambda function code: In your Lambda function code, you no longer need to import the AWS SDK, as it is now included as a layer. You can remove the import statement and your function should still work as expected.
    Now, your AWS Lambda function should be able to access the AWS SDK from the layer. Try to execute the function again and it should no longer throw the "Cannot find package 'aws-sdk'" error.
done setup aws-sdk layer and add it to lambda function. 
This is a Node.js application that serves as a backend server. It interacts with AWS services, including DynamoDB and Lambda, and makes API requests using Axios.

Prerequisites
    Node.js installed
AWS account and credentials
    Environment variables set up in a .env file or through the system
Installation
    Clone the repository or download the source code.
    Run npm install to install the required dependencies.
Configuration
    Set up your AWS credentials and configuration. This can be done through environment variables or by modifying the aws-config.js file.
    Create a .env file and set the necessary environment variables. Example:


Usage
    Start the server by running npm start.
    The server will run on the specified port or default to 3001.
    Access http://localhost:3001/ to see a greeting message.
    Endpoints
    /lambda-test
Description: Invokes a Lambda function named getEvgoChargingStationLoc and returns the payload.

Method: GET
    /dynamodb-data
Description: Retrieves data from a DynamoDB table named carbonEmission and returns the items.

Method: GET
Additional Information
    The application uses Express.js for the server and routing.
    CORS is enabled to allow cross-origin requests.
    The application uses dotenv to load environment variables from the .env file.
    The aws-config.js file contains the AWS configuration for DynamoDB and Lambda.
    The service.js file contains helper functions for interacting with DynamoDB.
    Please make sure to configure the AWS credentials and environment variables before running the application.

