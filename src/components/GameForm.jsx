import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { onOver, onOut, ClickOut } from "../hooks/FormFunctions";
import { createGame } from "../apis/productsApi";

const GameForm = () => {

   const queryClient = useQueryClient();

        const addGameMutation = useMutation({
          mutationFn: createGame,
          onSuccess: () => {
            alert("Game added!");
            // para actualizar datos
            queryClient.invalidateQueries("games");
          },
        });

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const game = Object.fromEntries(formData);
    console.log({game});
    addGameMutation.mutate({
      ...game,
      inStock: true
    });
  document.getElementById("myForm").reset();
  };

  ClickOut();

  return (
    <>
      <h1>Game Form </h1>
      <div id="div" onMouseOver={() => onOver()} onMouseOut={() => onOut()}>
        <form id="myForm" onSubmit={handleSubmit}>
          <label id="label1" htmlFor="name">
            Name{" "}
          </label>
          <input
            type={"text"}
            id="name"
            name="name"
            placeholder="Name?"
            required
          />{" "}
          <label id="label2" htmlFor="price">
            {" "}
            Price €{" "}
          </label>
          <input
            type={"number"}
            id="price"
            name="price"
            placeholder="Price product?"
            required
          />
          <br />
          <br />
          <br />
          <button id="btn">Add Game</button>
          <Link to={"/"}>Go to product list</Link>
        </form>
      </div>
    </>
  );
};

export default GameForm;
