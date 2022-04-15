import React, { useRef, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Css/SignUp.css";
import { DataContext } from "../Context";

const SingUp = () => {
  const value = useContext(DataContext);
  const [currentUser] = value.currentUser;
  const [name, setName] = value.name;
  const register = value.register;
  const history = useHistory();

  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value)
      return setError("Password don't match");

    try {
      setError("");
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create new account");
    }
    setLoading(false);
    console.log(currentUser);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <p className={error ? "Errorbtn" : ""}>{error}</p>
          <hr />

          <input
            type="email"
            placeholder="Enter Email"
            ref={emailRef}
            required
          />

          <input
            type="text"
            placeholder="Enter UserName"
            ref={userNameRef}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            ref={passwordRef}
            required
          />

          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            ref={confirmPasswordRef}
            required
          />

          <div className="clearfix">
            <button type="submit" disabled={loading} className="signupbtn">
              Sign Up
            </button>
          </div>
          <div className="otherCond">
            <p>
              Already have an account
              <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
