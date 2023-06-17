import db from "../models";
import * as AuthSchema from "../schemas/auth";
import { generateToken, verifyRefreshToken } from "../util/token";
import { validateSchema } from "../util/schema";

const bcrypt = require("bcryptjs");

const User = db.User;

export const signUp = async (req: any, res: any) => {
  try {
    const valid = validateSchema(AuthSchema.signUp, req.body);
    if (!valid) {
      return res.status(400).send({ message: "Missing parameters" });
    }

    const { username, email, password } = req.body;
    const oldUser = await User.findOne({
      where: { email: email },
    });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    let encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const { accessToken, refreshToken } = generateAccessRefreshToken(
      { user_id: user.id, email },
      process.env.ACCESS_TOKEN_EXPIRED_DURATION ?? "2m",
      process.env.REFRESH_TOKEN_EXPIRED_DURATION ?? "5m"
    );

    let newUser: any = user.get();
    newUser.accessToken = accessToken;
    newUser.refreshToken = refreshToken;
    delete newUser.password;

    res.status(200).send(newUser);
  } catch (error: any) {
    res.status(500).send({
      message: error.message || "Some error occured while signup",
    });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const valid = validateSchema(AuthSchema.login, req.body);
    if (!valid) {
      return res.status(400).send({ message: "Missing parameters" });
    }

    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email: email },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { accessToken, refreshToken } = generateAccessRefreshToken(
        { user_id: user.id, email },
        process.env.ACCESS_TOKEN_EXPIRED_DURATION ?? "2m",
        process.env.REFRESH_TOKEN_EXPIRED_DURATION ?? "5m"
      );

      let newUser: any = user.get();
      newUser.accessToken = accessToken;
      newUser.refreshToken = refreshToken;
      delete newUser.password;

      res.status(200).send(newUser);
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (error: any) {
    res.status(500).send({
      message: error.message || "Some error occured while login",
    });
  }
};

export const refresh = async (req: any, res: any) => {
  try {
    const valid = validateSchema(AuthSchema.refresh, req.body);
    if (!valid) {
      return res.status(400).send({ message: "Missing parameters" });
    }

    const { email, refreshToken } = req.body;

    const { validRefreshToken, data } = verifyRefreshToken(
      email,
      refreshToken,
      process.env.REFRESH_TOKEN
    );
    if (!validRefreshToken) {
      return res.status(401).send({ message: "Invalid refresh token" });
    }

    const accessToken = generateToken(
      data,
      process.env.ACCESS_TOKEN,
      process.env.ACCESS_TOKEN_EXPIRED_DURATION ?? "2m"
    );

    const tokenResult = {
      email: email,
      accessToken: accessToken,
      refreshToken: refreshToken,
    };

    res.status(200).send(tokenResult);
  } catch (error: any) {
    res.status(500).send({
      message: error.message || "Some error occured while login",
    });
  }
};

const generateAccessRefreshToken = (
  data: any,
  accessDuration: any,
  refreshDuration: any
) => {
  const accessToken = generateToken(
    data,
    process.env.ACCESS_TOKEN,
    accessDuration
  );
  const refreshToken = generateToken(
    data,
    process.env.REFRESH_TOKEN,
    refreshDuration
  );

  return { accessToken, refreshToken };
};
