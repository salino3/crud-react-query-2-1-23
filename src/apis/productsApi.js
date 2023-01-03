import axios from 'axios';

const myApi = axios.create({
    baseURL: "http://localhost:3600"
});

//* endpoints products
export const getProducts = async () => {
  const res = await myApi.get('/products');
  return res.data;
};

export const createProduct = (product) => {
  myApi.post('/products', product);
};

export const deleteProduct = (id) => myApi.delete(`/products/${id}`);

export const updateProduct = (product) => myApi.put(`/products/${product.id}`, product);


//* endpoints games
export const getGames = async () => {
    const res = await myApi.get("/games");
       return res.data;     
};

export const createGame = (game) => {
  myApi.post("/games", game);
};

export const deleteGame = (id) => myApi.delete(`/games/${id}`);

export const updateGame = (game) => myApi.put(`/games/${game.id}`, game);

