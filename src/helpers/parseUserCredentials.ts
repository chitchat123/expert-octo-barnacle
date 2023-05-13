export const parseBody = (login: string, password: string) => {
  return Object.entries({
    username: login,
    password: password,
    grant_type: 'password',
  })
    .map(([key, value]) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    })
    .join('&');
};
