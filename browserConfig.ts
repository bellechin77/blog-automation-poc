import { devices } from '@playwright/test';

export const browserConfig = {
  desktopChrome: devices['Desktop Chrome'],
  desktopFirefox: devices['Desktop Firefox'],
  desktopSafari: devices['Desktop Safari'],
  mobileChrome: devices['Pixel 5'],
  mobileSafari: devices['iPhone 12'],
};
