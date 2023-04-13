export const apiCallUser = async (token: string) => {
  return await fetch('http://localhost:3000/api/user', {
    method: 'GET',
    credentials: 'include',
    headers: {
      token: token,
    },
  })
    .then(res => res.json())
    .then(data => data.user as User)
    .catch(err => {
      throw new Error('could not get user info', err);
    });
};
