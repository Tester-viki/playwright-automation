const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false,
    browserName: 'chromium',
    channel: 'chrome',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
});
