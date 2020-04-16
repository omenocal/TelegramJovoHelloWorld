'use strict';

module.exports = {
  googleAction: {
    nlu: {
      name: 'dialogflow',
    },
    dialogflow: {
      agent: {
        language: 'en',
        disableInteractionLogs: false,
        disableStackdriverLogs: true,
        googleAssistant: {
          googleAssistantCompatible: true,
          welcomeIntentSignInRequired: false,
          startIntents: [],
          systemIntents: [],
          endIntentIds: [],
          oAuthLinking: {
            required: false,
            grantType: 'AUTH_CODE_GRANT',
          },
          voiceType: 'FEMALE_1',
          capabilities: [],
          protocolVersion: 'V2',
          autoPreviewEnabled: false,
          isDeviceAgent: false,
        },
        defaultTimezone: 'America/Chicago',
        isPrivate: true,
        supportedLanguages: [
          'es',
        ],
        onePlatformApiVersion: 'v2',
        analyzeQueryTextSentiment: false,
        enabledKnowledgeBaseNames: [],
        knowledgeServiceConfidenceAdjustment: -0.4,
        webhook: {
          url: '',
          available: true,
          useForDomains: false,
          cloudFunctionsEnabled: false,
          cloudFunctionsInitialized: false,
        },
      },
    },
  },
};
