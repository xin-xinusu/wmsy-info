import { Currency } from "../objectTypes";
import { CURRENCIES } from "../../../utils/constants";
import db from '../../utils';

class CurrencyResolver {
  async currency({ mongoose }) {
    const currency = await db.Currency.findOne({
      name: CURRENCIES.ADA,
    });
    if (!currency) {
      throw new Error("Currency not found");
    }
    return currency;
  }
}

export default CurrencyResolver;
