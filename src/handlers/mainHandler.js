'use strict';

const handlers = {
  ON_REQUEST() {
    console.log('mainHandler.js --------> ON_REQUEST');

    console.log('Platform Type:', this.getPlatformType());
    console.log('Intent Name:', this.getIntentName());

    if (this.isIntentRequest() && this.getIntentName() === 'DefaultFallbackIntent') {
      console.log('DefaultFallbackIntent query', this.getRawText());
    }
  },

  LAUNCH() {
    console.log('mainHandler.js --------> LAUNCH');

    const label = this.$user.isNew() ? 'WelcomeFirstTime' : 'WelcomeBack';

    return speak.call(this, `${label}.ask`, `${label}.reprompt`);
  },

  HowAreYouIntent() {
    console.log('mainHandler.js --------> HowAreYouIntent');

    return speak.call(this, 'HowAreYou.ask', 'HowAreYou.reprompt');
  },

  HelpIntent() {
    console.log('mainHandler.js --------> HelpIntent');

    return speak.call(this, 'Help.ask', 'Help.reprompt');
  },

  RepeatIntent() {
    console.log('mainHandler.js --------> RepeatIntent');

    return this.ask(this.$session.$data.speechOutput, this.$session.$data.reprompt);
  },

  END() {
    console.log('mainHandler.js --------> END');

    return speak.call(this, 'Exit');
  },

  Unhandled() {
    console.log('mainHandler.js --------> Unhandled');

    return speak.call(this, 'Unhandled.ask', 'Unhandled.reprompt');
  },
};

function speak(speechOutput, reprompt, params) {
  if (!reprompt) {
    return this.tell(this.t(speechOutput, params));
  }

  this.$session.$data.speechOutput = this.t(speechOutput, params);
  this.$session.$data.reprompt = this.t(reprompt, params);

  return this.ask(this.$session.$data.speechOutput, this.$session.$data.reprompt);
}

module.exports = handlers;
