import React, { useRef, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Css/SignUp.css";
import { DataContext } from "../Context";

const SignIn = () => {
  const value = useContext(DataContext);
  const [currentUser] = value.currentUser;
  const [name, setName] = value.name;
  const login = value.login;
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Sign in");
    }
    setLoading(false);
    console.log(currentUser);
  };

  return (
    <div className="signInForm">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Sign In</h1>
          <p>Please fill in this form to login</p>
          <p className={error ? "Errorbtn" : ""}>{error}</p>
          <hr />

          <input
            type="email"
            placeholder="Enter Email"
            ref={emailRef}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            ref={passwordRef}
            required
          />

          <div className="clearfix">
            <button type="submit" disabled={loading} className="signupbtn">
              Sign In
            </button>
          </div>
          <div className="otherCond">
            <p>
              Need an account ?<Link to="/register">Sign Up</Link>
            </p>
            <Link to="/forger-pass">Forget password ?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
