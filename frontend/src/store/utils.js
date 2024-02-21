// frontend/src/store/csrf.js
import Cookies from "js-cookie";

// Encapsulation: Group related functions within a module
const fetcher = async (
  url,
  action,
  dispatch,
  method = "GET",
  body = null,
  csrf = false
) => {
  try {
    // Build request options
    const options = buildOptions(method, body, csrf);
    // Send request and handle response
    const response = await fetch(url, options);
    handleResponse(response, action, dispatch);
  } catch (error) {
    // Handle errors
    handleError(url, error);
  }
};

// Abstraction: Hide the implementation details of building options
const buildOptions = (method, body, csrf) => {
  // Set default headers
  const headers = { "Content-Type": "application/json" };
  // Configure request options
  const options = { method, headers, body: body ? JSON.stringify(body) : null };

  // Add XSRF token header if CSRF protection is enabled
  if (csrf && method.toUpperCase() !== "GET") {
    options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
  }

  return options;
};

// Abstraction: Hide the implementation details of handling response
const handleResponse = async (response, action, dispatch) => {
  // If response is successful, parse JSON and dispatch action
  if (response.ok) {
    const data = await response.json();
    dispatch(action(data));
    return data;
  } else {
    // If response is not successful, throw an error
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
};

// Abstraction: Hide the implementation details of error handling
const handleError = (url, error) => {
  // Log error and rethrow it
  console.error(`Error fetching data from ${url}:`, error.message);
  throw error;
};

export { fetcher };
