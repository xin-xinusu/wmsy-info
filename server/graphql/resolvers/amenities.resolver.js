import { Amenity, Media } from '../objectTypes';
import db from '../../utils';

const AmenitiesResolver = {
  Amenity: {
    media: async (root, args) => {
      return await db.MediaModel.findOne({ _id: root.mediaId });
    },
  },

  Query: {
    amenities: async (parent, args) => {
      const { limit, offset, orderBy, where } = args;
      const options = {
        limit: limit || undefined,
        skip: offset || undefined,
        sort: orderBy || undefined,
      };
      return await db.AmenityModel.find(where, null, options);
    },

    amenity: async (parent, args) => {
      const { id } = args;
      return await db.AmenityModel.findById(id);
    },
  }
};

export default AmenitiesResolver;
