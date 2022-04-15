import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/SignUp.css";
import { DataContext } from "../Context";

const ForgetPassword = () => {
  const value = useContext(DataContext);
  const [currentUser] = value.currentUser;
  const [name, setName] = value.name;
  const resetPassword = value.resetPassword;

  const emailRef = useRef();

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your mail");
      alert(message);
    } catch {
      setError("Failed to Sign in");
    }
    setLoading(false);
    console.log(currentUser);
  };

  return (
    <div className="forgetPasswordForm">
      <h1>{currentUser && currentUser.email}</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Forget Password</h1>
          <p>Please fill in this form to restore your password</p>
          <p className={error ? "Errorbtn" : ""}>{error}</p>
          <hr />

          <input
            type="email"
            placeholder="Enter Email"
            ref={emailRef}
            required
          />

          <div className="clearfix">
            <button type="submit" disabled={loading} className="signupbtn">
              Rest Password
            </button>
          </div>
          <div className="otherCond">
            <Link to="/login">Login ?</Link>
            <p>
              Need an account ?<Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
