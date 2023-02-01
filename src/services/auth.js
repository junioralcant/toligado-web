export const TOKEN_KEY = '@airbnb-Token';
export const USER_KEY = '@user';

export const isAuthenticated = () =>
  localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const setUser = (data) => {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
};
export const user = () => JSON.parse(localStorage.getItem(USER_KEY));

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem('@to-ligado:company-1.0.0');
};
