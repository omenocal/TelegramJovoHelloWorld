# TelegramJovoHelloWorld

Sample Template to create Telegram bots with the Jovo Framework.

### Jovo CLI
The Jovo Command Line Interface ([jovo-cli](https://github.com/jovotech/jovo-cli)) offers the ability to create, prototype, test, and deploy your voice app quickly. To push any update, you will need this command:

```
jovo deploy
```

If you need to run the app locally, you just need to run the following command:

```
jovo run -w
```

This will start the server and watch for changes. You will see your webhook URL in the console so you can set it in the DialogFlow and Alexa console.


### Deployment for Dialogflow model

Follow this [tutorial](https://www.jovo.tech/tutorials/deploy-dialogflow-agent) to create a JSON key to connect your google account with the google cloud project. Then run the following commands in the console:

```bash
sudo gcloud auth activate-service-account --key-file=key-file.json
sudo jovo deploy -p googleAction --project-id DIALOGFLOW_PROJECT_ID
```
