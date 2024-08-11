const { test, expect } = require("@playwright/test");

const baseURL = "http://localhost:8000";

test.describe("API Routes", () => {
  let csrfToken;

  test.beforeAll(async ({ request }) => {
    // Perform an initial GET request to obtain the CSRF token
    const response = await request.get(`${baseURL}/api/test`);

    expect(response.ok()).toBeTruthy();

    // Extract the CSRF token from the cookie
    const responseCookie = await request.get(`${baseURL}/api/set-token-cookie`);
    console.log(`responseCookie: `, responseCookie);

    const token = [responseCookie.headers()["set-cookie"]];
    console.log(`token: `, token);

    const csrfToken = token.find((cookie) => cookie.includes("_csrf=")).split(";")[0].split("=")[1];
    console.log(`csrfToken: `, csrfToken);
  });

  test(`POST ${baseURL}/api/test should return the request body`, async ({
    request,
  }) => {
    const requestBody = { Message: `This is a message` };
    const response = await request.post(`${baseURL}/api/test`, {
      data: requestBody,
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
    });
    // console.log("response:", response.headers()["set-cookie"]);
    expect(response.ok()).toBeTruthy();
    // console.log("response.ok():", response.ok());
    const responseBody = await response.json();
    expect(responseBody).toEqual({ requestBody });
  });
});
// const responseCookie = await request.get(`${baseURL}/api/set-token-cookie`);
// console.log(`responseCookie: `, responseCookie.headers()["set-cookie"]);
// const cookies = [response.headers()["set-cookie"]];
// const csrfCookie = cookies.find((cookie) => cookie.includes("_csrf="));
// csrfToken = csrfCookie.split(";")[0].split("=")[1];
