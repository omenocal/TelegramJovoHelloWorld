'use strict';

const { expect } = require('chai');
const { App, Util } = require('jovo-framework');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const vga = require('virtual-google-assistant');

for (const p of [new GoogleAssistant()]) {
  const testSuite = p.makeTestSuite();

  describe(`PLATFORM: ${p.constructor.name} INTENTS` , () => {
    let platform;

    beforeEach(() => {
      platform = vga.VirtualGoogleAssistant.Builder()
        .directory('platforms/googleAction/dialogflow')
        .handler('src/index.handler')
        .create();
    });

    it('should return a welcome message and ask for the name at "LAUNCH"', async () => {
      const reply = await platform.launch();

      expect(reply.response.outputSpeech.ssml).contain('WelcomeFirstTime.ask');
    });
  });
}
