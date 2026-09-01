import 'dotenv/config';

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test files location
  testDir: './tests',

  // Maximum time allowed for one test
  timeout: 60000,

  // Maximum time allowed for expect assertions
  expect: {
    timeout: 10000,
  },

  // Allow tests to run in parallel
  fullyParallel: true,

  // Fail the build if test.only is accidentally committed
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,

  // Number of workers
  workers: process.env.CI ? 2 : undefined,

  // Reporters
  reporter: [
    ['html'],
    ['allure-playwright'],
  ],

  // Shared settings
  use: {

    // Application URL
    baseURL: process.env.BASE_URL,

    // Headless locally and in CI
    headless: true,

    // Capture screenshot when test fails
    screenshot: 'only-on-failure',

    // Record video when test fails
    video: 'retain-on-failure',

    // Collect trace when test fails
    trace: 'retain-on-failure',
  },

  // Browser projects
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

  ],
});