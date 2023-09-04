export const ResolversErrors = {
  INTERNAL_SERVER_ERROR: "Internal server error",
  UNAUTHORIZED: "Unauthorized",
  USER_ALREADY_EXISTS: "User already exists",
  EXCEEDED_AMOUNT: "Desired token amount is not available",
  NOT_ALLOWED_TO_BUY:
    "You are not allowed to buy any more tokens yet. Try again later",
  NOT_FOUND: "Not found",
  INVALID_DATA: "Some data field is invalid",
  WALLET_ALREADY_EXISTS: "Wallet already exists",
  EXTRACTION_IN_PROGRESS: "The customer has an extraction already in progress",
  INSUFFICIENT_CASH_BALANCE:
    "The customer does not have enough cash to extract the requested amount",
  ONLY_ADA_EXTRACTIONS_ALLOWED: "Only ADA extractions are supported (for now)",
  CURRENCY_NOT_SUPPORTED: "The provided currency is not supported",
  WRONG_EXTRACTION_AMOUNT: "The extraction amount must be a positive number",
  SUBMIT_PURCHASE_TX: "Error submitting purchase transaction. Try again later",
};
