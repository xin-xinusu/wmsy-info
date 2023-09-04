// when a big int is found inside data, it will be converted to a string
export const serialize = (data) => {
  if (typeof data === "bigint") {
    return data.toString();
  }

  if (Array.isArray(data)) {
    return data.map(serialize);
  }

  if (typeof data === "object" && data instanceof Date) {
    return data;
  }

  if (typeof data === "object" && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, serialize(value)])
    );
  }

  return data;
};
