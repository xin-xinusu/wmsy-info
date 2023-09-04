// Importing color constants and a utility function for strings
import { COLORS } from "./constants";
import { isStringEmpty } from "./strings";

// Function to parse a string date into a formatted date string
export const parseDate = (stringDate) => {
  // Create a new Date object from the provided string
  const date = new Date(stringDate);
  // Format and return the date in the "Month Year" format
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};

// Function to check if a tab is active
export const isTabActive = (tab, tabActive) => {
  // Check if the current tab is active and return the appropriate color
  return tab === tabActive ? COLORS.DARK_PURPLE : COLORS.LILAC_GREY;
};

// Function to get the title for a tab
export const getTitle = (tab) => {
  // Return the appropriate title based on the tab index
  return tab === 0
    ? "Referral Program"
    : tab === 1
    ? "Order History"
    : tab === 2
    ? "Wallet and Payment Methods"
    : tab === 3
    ? "Taxes and Documents"
    : "Profile Settings";
};

// Function to set the default info for a customer
export const setDefaultInfo = (customer) => {
  // Return an object with the default customer information
  return {
    firstName: customer.customer.firstName,
    lastName: customer.customer.lastName,
    password: "",
    confirmPassword: "",
    email: "",
    confirmEmail: "",
    city: customer.customer.city ? customer.customer.city : "",
    state: customer.customer.state ? customer.customer.state : STATES[0],
    country: "United States",
  };
};

// Function to check if the setting fields are not empty
export const checkSettingFields = (info) => {
  // Return true if any of the specified fields are empty, otherwise false
  return !(
    isStringEmpty(info.firstName) ||
    isStringEmpty(info.lastName) ||
    isStringEmpty(info.city)
  );
};

// Function to check if the wallet fields are not empty
export const checkWalletFields = (info) => {
  // Return true if any of the specified fields are empty, otherwise false
  return !(isStringEmpty(info.walletAddress) || isStringEmpty(info.walletName));
};

// Constants for countries and states
export const COUNTRIES = ["United States"];
export const STATES = [
  // List of U.S. states
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "texas",
  "Utah",
  "Vermot",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisonsin",
  "Wyoming",
];
