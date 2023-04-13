export const apiCallBoard = async (
  token: string,
  page: number,
  size: number
) => {
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
      return data as Pagination;
    })
    .catch(err => {
      throw new Error('could not get board data', err);
    });
};
