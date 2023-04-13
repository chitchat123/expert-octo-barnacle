export const apiCallBoard = async (
  token: string,
  page: number,
  size: number
) => {
  console.info(token);
  return await fetch(
    `https://api.campus.kpi.ua/Board/All?page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  )
    .then(res => res.json())
    .then(data => {
      console.info('data', data);
      return data;
    })
    .catch(err => {
      throw new Error('could not get board data', err);
    });
};
