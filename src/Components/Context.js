import React, { useState, useEffect, createContext } from "react";
import data from "../Services/Data";
import swal from "sweetalert";
import { auth } from "../firebase/firebase";

const { items } = data;

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(items);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentUser, setCurentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
      swal("Good job!", "Added Succesfully!", "success");
    } else {
      swal("Opps!", "This Product is already in your Cart", "error");
    }
  };

  const getTotal = () => {
    const res = cart.reduce((prev, item) => {
      return prev + item.productPrice * item.count;
    }, 0);
    setTotal(res);
  };

  const register = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const signOut = () => {
    return auth.signOut();
  };
  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };
  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };
  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurentUser(user);
      setLoading(false);
    });
    unsubscribe();
  }, []);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    total: [total, setTotal],
    currentUser: [currentUser, setCurentUser],
    name: [name, setName],
    addCart: addCart,
    getTotal: getTotal,
    register: register,
    login: login,
    signOut: signOut,
    resetPassword: resetPassword,
    updateEmail: updateEmail,
    updatePassword: updatePassword,
  };

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
};
