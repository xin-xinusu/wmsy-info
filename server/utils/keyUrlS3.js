export const getMediaKeyFromS3Url = (url) => {
  return (url.split("/").at(-1) || "").split("?").at(0) || "";
};

export const getUrlFromMediaKey = (key) => {
  return process.env.BUCKET_CDN_ENDPOINT + key;
};
