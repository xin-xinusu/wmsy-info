// import axios from "axios";
// import Decimal from "decimal.js";
// import {
//   validateHouseCanaryAppreciation,
//   validateHouseCanaryCoc,
//   validateHouseCanaryIrr,
//   validateHouseCanaryPropertyValue,
// } from "../handlers/houseCanary/schemas/validateResponse.schema";

// const HC_ENDPOINTS = {
//   PROPERTY_VALUE: "property/value",
//   PROPERTY_MORTGAGE_LIEN: "property/mortgage_lien",
//   PROPERTY_VALUE_FORECAST: "property/value_forecast",
//   PROPERTY_ZIP_DETAILS: "property/zip_details",
// };

// const fetchHouseCanaryEndpoints = async ({
//   address,
//   zipcode,
//   endpoint,
// }) => {
//   return await axios.get(`${process.env.HC_ENDPOINT}/${endpoint}`, {
//     params: {
//       address,
//       zipcode,
//     },
//     auth: {
//       username: process.env.HC_API_KEY || "",
//       password: process.env.HC_API_SECRET || "",
//     },
//   });
// };

// export const fetchHouseCanary = async ({ address, zipcode }) => {
//   const rawPropertyValue = await fetchHouseCanaryEndpoints({
//     address,
//     zipcode,
//     endpoint: HC_ENDPOINTS.PROPERTY_VALUE,
//   }).then((res) => {
//     const { data } = validateHouseCanaryPropertyValue.parse(res);
//     return data[0][HC_ENDPOINTS.PROPERTY_VALUE].result.value.price_mean;
//   });

//   const irr = await fetchHouseCanaryEndpoints({
//     address,
//     zipcode,
//     endpoint: HC_ENDPOINTS.PROPERTY_MORTGAGE_LIEN,
//   }).then((res) => {
//     const { data } = validateHouseCanaryIrr.parse(res);
//     return data[0][HC_ENDPOINTS.PROPERTY_MORTGAGE_LIEN].result.at(-1)
//       ?.hc_interest_rate;
//   });

//   const rawCoc = await fetchHouseCanaryEndpoints({
//     address,
//     zipcode,
//     endpoint: HC_ENDPOINTS.PROPERTY_VALUE_FORECAST,
//   }).then((res) => {
//     const { data } = validateHouseCanaryCoc.parse(res);
//     return data[0][HC_ENDPOINTS.PROPERTY_VALUE_FORECAST].result.month_18.value;
//   });

//   const appreciation = await fetchHouseCanaryEndpoints({
//     address,
//     zipcode,
//     endpoint: HC_ENDPOINTS.PROPERTY_ZIP_DETAILS,
//   }).then((res) => {
//     const { data } = validateHouseCanaryAppreciation.parse(res);
//     return data[0][HC_ENDPOINTS.PROPERTY_ZIP_DETAILS].result.historical
//       .returns_5_years;
//   });

//   return { rawPropertyValue, irr, rawCoc, appreciation };
// };

// export const getOfferingAmount = ({
//   currentPrice,
//   newPrice,
//   offeringAmount,
//   tokens,
// }) => {
//   const decimalNewPrice = new Decimal(newPrice);
//   const decimalCurrentPrice = new Decimal(Number(currentPrice));
//   const decimalOfferingAmount = new Decimal(Number(offeringAmount));
//   const decimalTokens = new Decimal(Number(tokens));

//   const newOfferingAmount = decimalNewPrice
//     .mul(decimalOfferingAmount)
//     .div(decimalCurrentPrice)
//     .floor();
//   const newPricePerShare = newOfferingAmount.div(decimalTokens).floor();

//   return { newOfferingAmount, newPricePerShare };
// };
