import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "../Css/Products.css";
import bag from "../../SVG/cart6.svg";

const Products = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <div id="products">
      <h1 className="headProduct">Our Products</h1>
      {products.map((product) => (
        <div className="card" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.src} alt="img" />
          </Link>
          <div className="content">
            <h3>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </h3>
            <span>$ {product.price}</span>
            <p>{product.description}</p>
            <button className="cartBtn" onClick={() => addCart(product._id)}>
              <p>Add to Cart</p> <img src={bag} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
