// Import the required modules and files
const bcrypt = require("bcrypt"); // Used for password hashing and comparison
const { StatusCodes } = require("http-status-codes"); // Constants for HTTP status codes
const mongoose = require('mongoose'); // MongoDB object modeling tool
const Admin = require('../../../models/admin');  // Importing the Admin model from the 'models' directory
const { ONE_DAY_MS } = require("../../../utils/time"); // Constant representing one day in milliseconds
const { HandlersErrors } = require("../../utils"); // Common error messages
const { generateAccessToken } = require("../../utils/auth"); // Function to generate a JWT access token
const { signInBodySchema } = require("./schemas/signin.schema"); // Schema for validating the request body

// Async function to handle admin sign in
const signInHandler = async (req, res) => {
  try {
    // Validate and extract the username and password from the request body
    const { username, password } = signInBodySchema.parse(req.body);

    // Find the admin with the given email in the database
    const admin = await Admin.findOne({ email: username }).exec();
    if (!admin) {
      // If no admin was found, throw an error
      throw new Error(HandlersErrors.INVALID_CREDENTIALS);
    }

    // Compare the provided password with the hashed password in the database
    const validPassword = await bcrypt.compare(password, admin.password);
    if (validPassword) {
      // If the password is valid, generate an access token
      const token = generateAccessToken(admin.email, admin._id);
      // Calculate the token expiration time
      const expiresAt = Date.now() + ONE_DAY_MS;

      // Send a success response with the access token and expiration time
      res.status(StatusCodes.OK).json({
        message: "Admin signed in",
        data: {
          access_token: token,
          expiresAt,
        },
      });
    } else {
      // If the password is not valid, throw an error
      throw new Error(HandlersErrors.INVALID_CREDENTIALS);
    }
  } catch (err) {
    // If an error occurs, log it and send an unauthorized response
    console.log("[Auth] auth error:", err);
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: HandlersErrors.INVALID_CREDENTIALS });
  }
};

module.exports = signInHandler;
