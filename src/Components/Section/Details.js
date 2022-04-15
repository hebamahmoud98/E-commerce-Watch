import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Context";
import Colors from "./Colors";
import "../Css/Details.css";
import { useState } from "react";

export const Details = () => {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const [imgIndex, setImgIndex] = useState(0);

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  return (
    <>
      {details.map((item) => (
        <div className="details" key={item._id}>
          <img src={item.src[imgIndex]} alt="product" />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>$ {item.price}</span>
            </div>

            <Colors colors={item.colors} setImgIndex={setImgIndex} />

            <p>{item.description}</p>
            <p>{item.content}</p>
            <Link
              to="/cart"
              className="cartButton"
              onClick={() => addCart(item._id)}
            >
              Add to Cart
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
