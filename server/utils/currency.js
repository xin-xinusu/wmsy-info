import axios from "axios";
import { CURRENCIES } from "../../utils/constants";
import { HandlersErrors } from "./http";
import * as db from "./db"; // Assuming you have a Currency model defined in the models folder

const COIN_GECKO_URL = "https://api.coingecko.com/api/v3/coins/cardano";

export const fetchCoinGeckoAPI = async () => {
  try {
    const response = await axios.get(COIN_GECKO_URL);
    return 1 / response.data.market_data.current_price.usd;
  } catch (err) {
    console.log(err);
    throw new Error(HandlersErrors.ERROR_FETCHING_COIN_API);
  }
};

export const updateAdaPrice = async (price) => {
  try {
    const currency = await db.Currency.findOneAndUpdate(
      { name: CURRENCIES.ADA },
      { price },
      { upsert: true, new: true }
    );
    console.log("Currency updated:", currency);
  } catch (err) {
    console.error("Error updating currency:", err);
    throw new Error(HandlersErrors.ERROR_UPDATING_CURRENCY);
  }
};
