import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../Context";
import Colors from "./Colors";
import close from "../../SVG/close2.svg";
import "../Css/Details.css";
import "../Css/Cart.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Cart = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1);
      }
    });
    setCart([...cart]);
    swal("OKAY!", "Deleted Succesfully!", "success");
  };

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center", color: "white" }}>NO PRODUCTS</h2>;
  } else {
    return (
      <>
        {cart.map((item) => (
          <div className="details cart" key={item._id}>
            <img src={item.src} alt="product" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
              </div>

              <p>{item.content}</p>
              <div className="priceAmount">
                <div className="amount">
                  <button className="count" onClick={() => reduction(item._id)}>
                    -
                  </button>
                  <span>{item.count}</span>

                  <button className="count" onClick={() => increase(item._id)}>
                    +
                  </button>
                </div>
                <div className="spanCount">
                  <span>$ {item.price * item.count}</span>
                </div>
              </div>
            </div>
            <div className="remove" onClick={() => removeProduct(item._id)}>
              X
            </div>
          </div>
        ))}
        <div className="total">
          <Link to="payment">To Payment</Link>
          <h3>Total : $ {total}</h3>
        </div>
      </>
    );
  }
};

export default Cart;
