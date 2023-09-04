import { StatusCodes } from "http-status-codes";
import { verifyToken } from "../utils/auth";

export const jwtAuth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token =
    typeof authHeader === "string" ? authHeader.split(" ")[1] : null;
  if (!token) return res.status(StatusCodes.UNAUTHORIZED).send("Access Denied");
  const verified = await verifyToken(token, res);
  if (verified) {
    await next();
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).send("Access Denied");
  }
};
