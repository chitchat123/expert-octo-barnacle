export const apiCallUser = async (token: any) => {
  return await fetch('http://localhost:3000/api/user', {
    method: 'GET',
    credentials: 'include',
    headers: {
      token: token?.value || '',
    },
  })
    .then(res => res.json())
    .then(data => data.user)
    .catch(err => {
      throw new Error('could not get user info', err);
    });
};
