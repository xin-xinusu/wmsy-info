import { StatusCodes } from "http-status-codes";

export const HTTP_METHODS = {
  PATCH: "PATCH",
  GET: "GET",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS",
  POST: "POST",
};

export const HandlersErrors = {
  CONFLICT: "Record already exists",
  ERROR_FETCHING_COIN_API: "Error fetching coin API",
  INTERNAL_SERVER_ERROR: "Internal server error",
  INVALID_ACTION: "Invalid action",
  INVALID_CREDENTIALS: "Invalid credentials",
  INVALID_ORDER_DATE: "Invalid order date",
  INVALID_RESPONSE_HC: "Invalid response from HouseCanary",
  METHOD_NOT_ALLOWED: "Method not allowed",
  MINTING_NOT_EXPIRED: "There is already a pending property",
  NO_ACTIVE_TX: "There is no active transaction to sync",
  NO_BLOCKFROST_PROJECT_ID:
    "No NEXT_PUBLIC_BLOCKFROST_PROJECT_ID .env variable defined!",
  NO_ADMIN_WALLET_SEED_PHRASE:
    "No ADMIN_WALLET_SEED_PHRASE .env variable defined!",
  NOT_FOUND: "Not found",
  ORDER_NOT_PAY_OK: "Order is not in PAY_OK status",
  PERIOD_EXPIRED: "The period has not expired yet",
  PRICE_PER_SHARE_TOO_LOW: "Price per share too low",
  RENTAL_ALREADY_UPDATED:
    "This customer has already received payment this month",
  TOKEN_IN_USE: "This token has already been used",
  TX_IN_PROGRESS: "Transaction in progress. Wait for it to finish.",
  UNAUTHORIZED: "Unauthorized",
};

export const handleErrors = (
  prefix,
  err,
  res
) => {
  if (err instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  } else {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: HandlersErrors.INTERNAL_SERVER_ERROR });
  }
};
