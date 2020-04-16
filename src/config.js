// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
  logging: true,

  intentMap: {
    LaunchIntent: 'LAUNCH',

    'AMAZON.YesIntent': 'YesIntent',
    'AMAZON.NoIntent': 'NoIntent',
    'AMAZON.RepeatIntent': 'RepeatIntent',
    'AMAZON.HelpIntent': 'HelpIntent',

    DefaultFallbackIntent: 'Unhandled',
    'AMAZON.FallbackIntent': 'Unhandled',

    CancelIntent: 'END',
    StopIntent: 'END',
    'AMAZON.CancelIntent': 'END',
    'AMAZON.StopIntent': 'END',
  },

  intentsToSkipUnhandled: [
    'END',
    'HelpIntent',
    'CancelIntent',
    'StopIntent',
  ],

  db: {
    DynamoDb: {
      enabled: false,
      tableName: 'TelegramBotUsers',
    },
    FileDb: {
      enabled: false,
    },
  },

  i18n: {
    returnNull: false,
    fallbackLng: 'en-US',
  },

  user: {
    context: {
      enabled: true,
    },
    metaData: {
      enabled: true,
    },
  },
};
