'use strict';

const { App } = require('jovo-framework');
const { Dialogflow } = require('jovo-platform-dialogflow');
const { JovoDebugger } = require('jovo-plugin-debugger');

const mainHandler = require('./handlers/mainHandler');

const app = new App();

const stage = process.env.STAGE || process.env.NODE_ENV;

if (['local', 'UNIT_TEST'].includes(stage)) {
  const { FileDb } = require('jovo-db-filedb');

  app.use(new FileDb());
} else {
  const { DynamoDb } = require('jovo-db-dynamodb');

  app.use(new DynamoDb());
}

app.use(
  new Dialogflow(),
  new JovoDebugger(),
);

app.setHandler(
  mainHandler,
);

module.exports.app = app;
