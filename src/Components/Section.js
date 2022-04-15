import React from "react";
import { Route } from "react-router-dom";
import Details from "./Section/Details";
import Products from "./Section/Products";
import Cart from "./Section/Cart";
import Payment from "./Section/Payment";
import SignIn from "./Section/SignIn";
import SingUp from "./Section/SingUp";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "./Section/ForgetPassword";
import UpdateProfile from "./Section/UpdateProfile";
import Contact from "./Section/Contact";
import About from "./Section/About";

const Section = () => {
  return (
    <section>
      <PrivateRoute path="/" exact component={Products} />
      <PrivateRoute path="/product/:id" component={Details} />
      <PrivateRoute path="/cart" component={Cart} />
      <PrivateRoute path="/payment" component={Payment} />
      <PrivateRoute path="/contact" component={Contact} />
      <PrivateRoute path="/about" component={About} />
      <PrivateRoute path="/update" component={UpdateProfile} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SingUp} />
      <Route path="/forger-pass" component={ForgetPassword} />
    </section>
  );
};

export default Section;
