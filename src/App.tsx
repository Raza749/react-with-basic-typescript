import React, { useState } from "react";
import "./index.css";
import Product from "./components/Product";

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
}


const App = () => {

  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Macbook",
      price: 249.99, // Correct price
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "IPhone",
      price: 1299.00, // Corrected price with two decimal places
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Apple watch",
      price: 199.0,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/6214478/pexels-photo-6214478.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Mac Mini",
      price: 799.99,
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/162622/facebook-login-office-laptop-business-162622.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Samsung Laptop",
      price: 499.99, // Corrected price with two decimal places
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Mechanical Keyboard",
      price: 99.99,
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Gaming Mouse",
      price: 79.99,
    },
  ]);

  function handAddToCart(id:number){
    console.log("Clicked",id);
    
  }

  return (
    <>
      <div className="container">
        {
          products.map((product)=><Product product={product} key={product.id} handleAddToCartClick={handAddToCart} />)
        }
      </div>
    </>
  );
};

export default App;