const { devices } = require("@playwright/test");

const frontendConfig = {
  testDir: "./test/frontend",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "frontend-chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};

const backendConfig = {
  testDir: "./test/backend",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  use: {
    baseURL: "http://localhost:8000",
    headless: true,
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "backend-chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};

module.exports = {
  // Merge both configs under one Playwright configuration
  projects: [
    frontendConfig.projects[0], // Frontend Project
    backendConfig.projects[0],  // Backend Project
  ],
};