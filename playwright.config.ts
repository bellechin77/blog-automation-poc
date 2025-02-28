import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  retries: 2, // Retries on failure
  reporter: [['html', { outputFolder: 'playwright-report' }], ['json']],
  use: {
    headless: true, // Run tests in headless mode
    screenshot: 'only-on-failure', // Capture screenshot only on failure
    video: 'retain-on-failure', // Record video of failed tests
    trace: 'on', // Record traces for debugging
    baseURL: 'https://medium.com', // Base URL for the application
  },
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'google-chrome',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});
