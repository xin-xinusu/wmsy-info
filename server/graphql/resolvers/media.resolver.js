import { Resolver } from "type-graphql";
import { Media } from "../objectTypes";

const MediaResolver = Resolver((type) => Media);

module.exports = {
  MediaResolver,
};
