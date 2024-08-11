const { test, expect } = require("@playwright/test");

const baseURL = "http://localhost:8000";

test.describe("API Routes", () => {
  // Test the GET /api/test route

  test(`GET ${baseURL}/api/test should return gnarly message`, async ({
    request,
  }) => {
    const response = await request.get(`${baseURL}/api/test`);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toEqual({ message: `this is a gnarly message` });
  });

    // Test the POST /api/test route
    test(`POST ${baseURL}/api/test should return the request body`, async ({ request }) => {
        const requestBody = { key: `value` };
        const response = await request.post(`${baseURL}/api/test`, {
          data: requestBody,
          headers: {
            "Content-Type": "application/json",
            // Include CSRF token if necessary, e.g., "X-CSRF-Token": "your-csrf-token"
          },
        });
        console.log(response)
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody).toEqual({ requestBody });
      });

  //   // Test the GET /api/set-token-cookie route
  //   test(`GET ${baseURL}/api/set-token-cookie should set a cookie and return the user`, async ({ request }) => {
  //     const response = await request.get(`${baseURL}/api/set-token-cookie`);
  //     expect(response.ok()).toBeTruthy();
  //     const responseBody = await response.json();
  //     expect(responseBody.user).toBeDefined();
  //     expect(responseBody.user.username).toBe(`Demo-lition`);
  //   });

  //   // Test the GET /api/restore-user route
  //   test(`GET ${baseURL}/api/restore-user should return the restored user`, async ({ request }) => {
  //     // This assumes you have a session or JWT token handling
  //     const response = await request.get(`${baseURL}/api/restore-user`);
  //     expect(response.ok()).toBeTruthy();
  //     const responseBody = await response.json();
  //     expect(responseBody).toBeDefined();
  //     // Further assertions depend on how req.user is structured
  //   });

  //   // Test the GET /api/require-auth route
  //   test(`GET ${baseURL}/api/require-auth should require authentication`, async ({ request }) => {
  //     const response = await request.get(`${baseURL}/api/require-auth`);
  //     expect(response.status()).toBe(401); // Assuming 401 Unauthorized without auth

  //     // Add auth if needed, depending on how requireAuth works in your app
  //     // Example:
  //     // const authResponse = await request.get(`/api/require-auth`, {
  //     //   headers: { Authorization: `Bearer your-jwt-token` },
  //     // });
  //     // expect(authResponse.ok()).toBeTruthy();
  //     // const responseBody = await authResponse.json();
  //     // expect(responseBody).toBeDefined();
  //   });
});
