export const apiCallUser = async (token: string) => {
  return fetch('https://api.campus.kpi.ua/Account/Info', {
    credentials: 'include',
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(data => data as User)
    .catch(err => {
      throw new Error('could not get user info', err);
    });
};
