// Importing the necessary dependencies
import { StatusCodes } from 'http-status-codes'; // Constants for HTTP status codes
import { getQuery } from '../../middleware'; // Function to get query string from URL
import { serialize } from '../../middleware/serialize'; // Function for serializing the response data
import { HandlersErrors, getManyQuery, getPagination } from '../../utils'; // Common error messages, query parser, and pagination utilities
import { parseFilter } from '../../utils/parseFilter'; // Utility for parsing filter parameters
import { parseSort } from '../../utils/parseSort'; // Utility for parsing sort parameters
import db from '../../utils/db'; // Database utilities

// Async function to handle getting a list of amenities
export const getListHandler = async (req, res) => {
  try {
    // Parse the sort, filter, and page parameters from the URL's query string
    const { sort, filter, page } = getManyQuery.parse(getQuery(req.url));
    // Get the skip and take values for pagination based on the page parameter
    const { skip, take } = getPagination({ page });
    // Parse the sort parameter into an orderBy object
    const orderBy = sort ? parseSort(sort) : {};
    // Parse the filter parameter into a where object
    const where = filter ? parseFilter(filter, []) : {};

    // Find amenities in the database that match the where condition
    const amenities = await db.Amenity.find(where)
      .populate('propertyTypes.propertyType') // Populate the propertyType field of the propertyTypes
      .populate('media') // Populate the media field
      .skip(skip) // Skip the first skip documents
      .limit(take) // Limit the number of documents returned to take
      .sort(orderBy); // Sort the documents by orderBy

    // Get the total number of amenities that match the where condition
    const total = await db.Amenity.countDocuments(where);

    // Map the amenities to an array of rows with the id and attributes of each amenity
    const rows = amenities.map(amenity => ({
      id: amenity._id,
      attributes: amenity,
    }));

    // Send a success response with the serialized data of the amenities and the total number of amenities
    res.status(StatusCodes.OK).send(serialize({ data: rows, meta: { total } }));
  } catch (err) {
    // If an error occurs, log it and send an error response
    console.log('[Amenity] getListHandler error: ', err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: HandlersErrors.INTERNAL_SERVER_ERROR });
  }
};
