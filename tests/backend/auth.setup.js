import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';
const baseURL = "http://localhost:8000";

setup('authenticate', async ({ request }) => {
  // Send authentication request. Replace with your own.
  await request.post(`${baseURL}/api/set-token-cookie`, {
    form: {
      'user': 'Demo-lition',
      'password': 'password'
    }
  });
  await request.storageState({ path: authFile });
});