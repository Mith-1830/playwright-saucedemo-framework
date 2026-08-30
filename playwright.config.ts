import 'dotenv/config';

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Folder where all test files are stored
  testDir: './tests',

  // Maximum time allowed for one test
  timeout: 60000,

  // Run tests one by one
  fullyParallel: false,

  // HTML Report
  reporter: [
  ['html'],
  ['allure-playwright']
],

  // Common settings
  use: {
    baseURL: process.env.BASE_URL,

    // Open browser in UI mode
    headless: false,

    // Use full browser window
    viewport: null,

    // Capture screenshot only if test fails
    screenshot: 'only-on-failure',

    // Record video only if test fails
    video: 'retain-on-failure',

    // Collect trace only if test fails
    trace: 'retain-on-failure',
  },

  // Cross-browser projects
  projects: [

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],

        launchOptions: {
          args: ['--start-maximized'],
          slowMo: 1000,
        },
      },
    },

    {
      name: 'firefox',

      use: {
        ...devices['Desktop Firefox'],

        launchOptions: {
          slowMo: 1000,
        },
      },
    },

    {
      name: 'webkit',

      use: {
        ...devices['Desktop Safari'],

        launchOptions: {
          slowMo: 1000,
        },
      },
    },

  ],

});