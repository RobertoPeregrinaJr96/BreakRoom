const { devices } = require("@playwright/test");

const frontendConfig = {
  testDir: "./tests/frontend",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  //   reporter: "html",
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
  testDir: "./tests/backend",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  //   reporter: "html",
  use: {
    baseURL: 'http://localhost:8000',
    headless: true,
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
    env: {
      NODE_ENV: `development`,
    },
  },
  projects: [
    {
      name: "chromium",
      use: {
        headless: false,
        bypassCSP: true, // add this to disable cors
        launchOptions: {
          args: ["--disable-web-security"], // add this to disable cors
        },
      },
    },
  ],
};

const selectedConfig =
  process.env.TEST_ENV === "backend" ? backendConfig : frontendConfig;

module.exports = selectedConfig;
