import React from "react";
import '../index.css'
import { IProduct } from "../App";

interface ProductProps {
  product: IProduct;
  handleAddToCartClick(id:number):void;
}


// function handleAddToCartClick(id:number){
    
// }

const Product = ({ product,handleAddToCartClick }: ProductProps) => {
  return (
    <div>
      <div>
      <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <h2>{product.price} </h2>
      </div>
      <button onClick={()=>handleAddToCartClick(product.id)}>Add to cart</button>
    </div>
  );
};

export default Product;
