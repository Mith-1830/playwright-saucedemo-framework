import { defineConfig } from '@playwright/test';

export default defineConfig({

  // Folder where all test files are stored
  testDir: './tests',

  // Run tests one by one (easy for learning)
  fullyParallel: false,

  // HTML Report
  reporter: 'html',

  // Common settings
  use: {
     baseURL: 'https://www.saucedemo.com/',

    // Open browser in UI mode
    headless: false,

    // Open browser in full screen
    viewport: null,

    // Slow down every action by 1 second
    launchOptions: {
      args: ['--start-maximized'],
      slowMo: 1000,
    },

    // Capture screenshot only if test fails
    screenshot: 'only-on-failure',

    // Record video only if test fails
    video: 'retain-on-failure',

    // Collect trace only if test fails
    trace: 'retain-on-failure',
  },

  // We are learning only Chromium now
  projects: [
    {
      name: 'chromium',
      use: {},
    },
  ],

});