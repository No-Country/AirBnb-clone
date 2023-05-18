import { tokenVerificationErrors } from "../utils/tokenManager.js";
import jwt from "jsonwebtoken";


export const requireRefreshToken = (req, res, next) => {
  try {
    const refreshTokenCookie = req.cookies.refreshToken;
    if (!refreshTokenCookie) throw new Error("No existe el token");

    const { uid } = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);

    req.uid = uid;

    next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .send({ error: tokenVerificationErrors[error.message] });
  }
};
