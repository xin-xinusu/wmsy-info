// Enum for the different states of authentication status
export const NEXT_AUTH_STATUS = {
  LOADING: "loading", // When the authentication status is still being checked
  AUTHENTICATED: "authenticated", // When the user is authenticated
  UNAUTHENTICATED: "unauthenticated", // When the user is not authenticated
};

// Enum for the different authentication providers
export const AUTH_PROVIDERS = {
  GOOGLE: "google", // Google authentication provider
};

// Function to check if the user is logged in
export const isUserLoggedIn = (session) => {
  // Get the authentication status from the session
  const status =
    typeof session === "string" ? session : session.status;
  // Return true if the user is authenticated, otherwise false
  return status === NEXT_AUTH_STATUS.AUTHENTICATED;
};

// Function to get user data
export const getUserData = (session, customerData) => {
  // Destructuring the image and name properties from the session data
  const { image, name } = session?.data?.user || {};
  // Destructuring the media, firstName, and lastName properties from the customer data
  const { media, firstName, lastName } = customerData?.customer || {};
  // Assigning the profile picture, user first name, and user last name
  const profilePicture = media?.url || image || "";
  const userName = firstName || name || "";
  const userLastName = lastName || "";

  // Returning the user data as an object
  return { profilePicture, userName, userLastName };
};
