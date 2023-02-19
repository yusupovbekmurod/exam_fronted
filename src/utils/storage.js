export const setAccessTokenLocal = (value) => {
  localStorage.setItem("access_token", value);
};

export const getAccessTokenLocal = () => {
  return localStorage.getItem("access_token");
};

export const setEmail = (value) => {
  localStorage.setItem("user", value);
};

export const getEmail = () => {
  return localStorage.getItem("user");
};
