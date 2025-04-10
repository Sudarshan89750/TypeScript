import jwt from "jsonwebtoken";
const generateToken = (payload) => {
  const key = "SecretPassphrase";
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, key, options);
};
module.exports = { generateToken };
