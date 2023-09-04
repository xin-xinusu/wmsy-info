import { StatusCodes } from 'http-status-codes';
import { fetchCoinGeckoAPI, updateAdaPrice } from '../../utils/currency';
import * as db from '../../utils';

const updateCurrencyCron = async (req, res) => {
  try {
    const price = await fetchCoinGeckoAPI();

    await updateAdaPrice(db, price);

    res.status(StatusCodes.OK).json({ message: "Currency updated" });
  } catch (err) {
    console.log("[CurrencyCron] currencyCronHandler error: ", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

export { updateCurrencyCron };
