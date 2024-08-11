// const { test, expect } = require('@playwright/test');

// test.describe('/api/session', () => {
//   // Before all tests, set up the API context
//   let apiContext;
  
//   test.beforeAll(async ({ playwright }) => {
//     apiContext = await playwright.request.newContext({
//       baseURL: 'http://127.0.0.1:8000/api',
//     });
//   });

//   // Test: Restore session user when no user is logged in
//   test('GET /api/session - should return null when no user is logged in', async () => {
//     const response = await apiContext.get('/session');
//     const responseBody = await response.json();

//     expect(response.status()).toBe(200);
//     expect(responseBody).toEqual({ user: null });
//   });
 

// //   // After all tests, dispose the API context
// //   test.afterAll(async () => {
// //     await apiContext.dispose();
// //   });
// // });
