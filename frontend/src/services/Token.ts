const getLocalRefreshToken = () => {
  const user: any =
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user") ?? "");
  return user?.refreshToken;
};

const getLocalAccessToken = () => {
  const user =
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user") ?? "");
  return user?.accessToken;
};

const updateLocalAccessToken = (token: any) => {
  let user =
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user") ?? "");
  user.accessToken = token;
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
  return (
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user") ?? "")
  );
};

const setUser = (user: any) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem("user");
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
