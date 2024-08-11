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
    baseURL: "http://localhost:8000",
    headless: true,
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
    // proxy: {
    //   server: "http://localhost:8000",
    // },
  },
  projects: [
    {
      name: "backend-chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};

const selectedConfig =
  process.env.TEST_ENV === "backend" ? backendConfig : frontendConfig;

module.exports = selectedConfig;
