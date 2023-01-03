import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getGames,
  deleteGame,
  updateGame } from "../apis/productsApi";

const Games = () => {

  const queryClient = useQueryClient();

  const {
    isLoading,
    data: games,
    isError,
    error,
  } = useQuery({
    queryKey: ["games"],
    queryFn: getGames,
    select: (products) => products.sort((a, b) => b.id - a.id),
  });

 const deleteGameMutation = useMutation({
  mutationFn: deleteGame,
  onSuccess: () => {
     queryClient.invalidateQueries("games");
  }
 });

 const updateGameMutation = useMutation({
  mutationFn: updateGame,
  onSuccess: () => {
    queryClient.invalidateQueries('games');
  }
 });



  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Games</h1>
      <div>
        {games &&
          games.map((game) => (
            <div key={game.id}>
              <h3>{game.name}</h3>
              <p>{game.price} €</p>
              <button onClick={() => deleteGameMutation.mutate(game.id)}>
                Delete
              </button>
              <input
                checked={game.inStock}
                id={game.id}
                onChange={(event) =>
                  updateGameMutation.mutate({
                    ...game,
                    inStock: event.target.checked,
                  })
                }
                type={"checkbox"}
              />
              <label htmlFor={game.id}>In Stock</label>
              <div>
                <hr />
              </div>
              <br />
            </div>
          ))}
      </div>
    </>
  );
};

export default Games;
