export const signUp = {
  type: "object",
  properties: {
    username: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["username", "email", "password"],
  additionalProperties: false,
};

export const login = {
  type: "object",
  properties: {
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

export const refresh = {
  type: "object",
  properties: {
    email: { type: "string" },
    refreshToken: { type: "string" },
  },
  required: ["email", "refreshToken"],
  additionalProperties: false,
};
