import { userData as user } from "../Utils/user";
import { generateToken } from "../Utils/jwtUtils";

const loginUser = (username, password) => {
  if (username === user.username && password === user.password) {
    const token = generateToken({ id: user.id, username: user.username });
    return {
      token,
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }
  return null;
};

module.exports = {
  loginUser,
};
