const URL = "http://localhost:1338/api/threads/";

export const getAll = () => {
  return fetch(URL)
    .then(r => r.json())
    .catch(e => {
      console.log("Erro no get all", e);
    });
};

export const getSlug = (slug) => {
  return fetch(URL + slug)
    .then(r => r.json())
    .catch(e => {
      console.log("Erro no get slug", e);
    });
};
