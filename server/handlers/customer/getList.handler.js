import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import { getQuery } from '../../middleware';
import { serialize } from '../../middleware/serialize';
import { HandlersErrors, getManyQuery, getPagination } from '../../utils';
import { exclude } from '../../utils/exclude';
import * as db from '../../utils'

const getListHandler = async (req, res) => {
  try {
    const { skip, take } = getPagination(getManyQuery.parse(getQuery(req.url)));

    const customersPromise = Customer.find()
      .populate('profilePicture')
      .skip(skip)
      .limit(take)
      .exec();

    const totalPromise = db.Customer.countDocuments().exec();

    const [customers, total] = await Promise.all([
      customersPromise,
      totalPromise,
    ]);

    customers.map((customer) => exclude(customer, ['password']));

    const rows = customers.map((customer) => ({
      id: customer.id,
      attributes: customer,
    }));

    res.status(StatusCodes.OK).send(serialize({ data: rows, meta: { total } }));
  } catch (err) {
    console.log('[Customer] getListHandler error: ', err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: HandlersErrors.INTERNAL_SERVER_ERROR });
  }
};

export { getListHandler };
