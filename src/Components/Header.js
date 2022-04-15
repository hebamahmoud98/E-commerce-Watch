import React, { useState, useContext } from "react";
import menu from "../SVG/menu1.svg";
import close from "../SVG/close.svg";
import bag from "../SVG/cart6.svg";
import mylogo from "../SVG/mylogo.png";
import { Link, useHistory } from "react-router-dom";
import "./Css/Header.css";
import { DataContext } from "./Context";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const [name] = value.name;
  const signOut = value.signOut;
  const history = useHistory();

  const menuToggle = () => {
    setToggle(!toggle);
  };

  const handleLogOut = async () => {
    setError("");
    try {
      await signOut();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <Link to="/">
          <img src={menu} alt="menu" width="30" />
        </Link>
      </div>
      <div className="logo">
        <p>
          <span>{name}</span>
        </p>
        <Link to="/" className="ms14">
          <img src={mylogo} alt="menu" />
        </Link>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <div className="liContainer">
            <li onClick={menuToggle}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={menuToggle}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={menuToggle}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={menuToggle}>
              <Link to="/login">Login</Link>
            </li>
            <li className="log-out" onClick={menuToggle}>
              <button onClick={handleLogOut}>Log Out</button>
            </li>
            <li className="update" onClick={menuToggle}>
              <Link to="/update">Update Profile</Link>
            </li>

            <li className="close" onClick={menuToggle}>
              <Link to="/">
                <img src={close} width="20" alt="close" />
              </Link>
            </li>
          </div>
        </ul>
        <div className="nav-cart">
          <div className="cartNum">{cart.length}</div>
          <Link to="/cart">
            <img src={bag} width="35" alt="cart" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
