import React from 'react'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from "../apis/productsApi";


const Products = () => {

 const queryClient = useQueryClient();

//
   const {
     isLoading,
     data: products,
     isError,
     error,
   } = useQuery({
 // for save it in the cache memory
     queryKey: ["products"],
     queryFn: getProducts,
     select: (products) => products.sort((a, b) => b.id - a.id),
   });

    const deleteProductMutation = useMutation({
       mutationFn: deleteProduct, 
       onSuccess: () => {
        queryClient.invalidateQueries('products');
       }
     });

    const updateProductMutation = useMutation({
      mutationFn: updateProduct,
      onSuccess: () => {
        queryClient.invalidateQueries('products');
      }
    });

   if(isLoading) return <div>Loading...</div>
   else if (isError) return <div>Error: {error.message}</div>
   

  return (
    <>
      <h1>Products</h1>
      <div>
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price} €</p>
              <button onClick={() => deleteProductMutation.mutate(product.id)}>
                Delete
              </button>
              <input
                checked={product.inStock}
                id={product.id}
                onChange={(event) =>
                  updateProductMutation.mutate({
                    ...product,
                    inStock: event.target.checked,
                  })
                }
                type={"checkbox"}
              />
              <label htmlFor={product.id}>In Stock</label>
              <div>
                <hr />
              </div>
              <br />
            </div>
          ))}
      </div>
    </>
  );
}

export default Products