import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { ONE_DAY_JWT } from "../../utils/time";

export const generateAccessToken = (email, id) =>
  jwt.sign({ email, id }, process.env.JWT_SECRET || "", {
    expiresIn: ONE_DAY_JWT,
  });

export async function verifyToken(token, res) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    return decoded;
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).send("Token is invalid");
  }
}
