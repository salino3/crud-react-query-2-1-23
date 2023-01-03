import React from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from '../apis/productsApi';
import { onOver, onOut, ClickOut } from "../hooks/FormFunctions";
import { Link } from 'react-router-dom';

const ProductForm = () => {

   const queryClient = useQueryClient();

     const addProductMutation = useMutation({
       mutationFn: createProduct,
       onSuccess: () => {
         alert("Product added!");
  // para actualizar datos
         queryClient.invalidateQueries('products');
       },
     });


function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const product = Object.fromEntries(formData);
  console.log({product});
  addProductMutation.mutate({
    ...product,
    inStock: true
  });

  document.getElementById("myForm").reset();
 };

 ClickOut();



  return (
    <>
      <h1>Product Form </h1>
      <div id="div" onMouseOver={() => onOver()} onMouseOut={() => onOut()}>
        <form id="myForm" onSubmit={handleSubmit}>
          <label id="label1" htmlFor="name">
            Name{" "}
          </label>
          <input
            type={"text"}
            id="name"
            name="name"
            placeholder="Name product?"
            required
          />
          <label id="label2" htmlFor="description">
            {" "}
            Description{" "}
          </label>
          <input
            type={"text"}
            id="description"
            name="description"
            placeholder="Description?"
            required
          />{" "}
          <br />
          <br />
          <label id="label3" htmlFor="price">
            {" "}
            Price €{" "}
          </label>
          <input
            type={"number"}
            id="price"
            name="price"
            placeholder="Price product?"
            required
          />{" "}
          <button id="btn">Add Product</button>
          <Link to={"/second"}>Go to game list</Link>
        </form>
      </div>
    </>
  );
}

export default ProductForm