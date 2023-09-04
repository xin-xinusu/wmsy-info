import { TWeight } from "../Components/Typography";

export const deviceDimensionToNumber = (value) => {
  return parseInt(value.slice(0, -2));
};

export const isBold = (value) => {
  return value ? `${TWeight.BOLD}` : `${TWeight.REGULAR}`;
};

export const isStringEmpty = (value) => {
  return (
    value?.trim() === "" ||
    value?.trim() === null ||
    value?.trim() === undefined
  );
};

export const upperCaseFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
