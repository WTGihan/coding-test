const jwt = require("jsonwebtoken");

export const generateToken = (data: any, secretKey: any, duration: string) => {
  return jwt.sign(data, secretKey, {
    expiresIn: duration,
  });
};

export const verifyRefreshToken = (
  email: string,
  refreshToken: any,
  secretKey: any
) => {
  const data = jwt.verify(refreshToken, secretKey);
  const validRefreshToken = data.email === email;
  delete data.iat;
  delete data.exp;
  return { validRefreshToken, data };
};
