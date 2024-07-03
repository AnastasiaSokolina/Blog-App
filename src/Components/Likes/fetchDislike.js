export const fetchDislike = async (slug, token) => {
  const options = {
    method: 'DELETE',
    Host: 'https://blog.kata.academy',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${token}`,
    },
  };

  const response = await fetch(`https://blog.kata.academy/api/articles/${slug}/favorite`, options).then((answer) => answer.json());

  return response;
};
