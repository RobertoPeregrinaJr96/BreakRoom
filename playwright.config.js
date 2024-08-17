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
    env: {
      NODE_ENV: `development`,
    },
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
    env: {
      NODE_ENV: `development`,
    },
  },
  projects: [
    { name: "setup", testMatch: /.*\.setup\.js/ },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        // Use prepared auth state.
        storageState: "playwright/.auth/user.json",
      },
      dependencies: ["setup"],
    },
  ],
};

const selectedConfig =
  process.env.TEST_ENV === "backend" ? backendConfig : frontendConfig;

module.exports = selectedConfig;
