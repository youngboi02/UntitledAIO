// LOCAL TOKEN
export const getLocalToken = () => {
  try {
    return JSON.parse(localStorage.getItem('token'));
  } catch {
    return;
  }
};
export const setLocalToken = (token) => localStorage.setItem('token', JSON.stringify(token));
export const deleteLocalToken = () => localStorage.removeItem('token');