const thunk = async (response, action) => async (dispatch) => {
  try {
    // If response is successful, parse JSON and dispatch action
    if (response.ok) {
      const data = await response.json();
      dispatch(action(data));
      return data;
    } else {
      // If response is not successful, throw an error
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    // Handle errors
    console.error("Error:", error.message);
    throw error;
  }
};

export { thunk };