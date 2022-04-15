import React, { useRef, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Css/SignUp.css";
import { DataContext } from "../Context";

const UpdateProfile = () => {
  const value = useContext(DataContext);
  const [currentUser] = value.currentUser;
  const [name, setName] = value.name;
  const updateEmail = value.updateEmail;
  const updatePassword = value.updatePassword;
  const history = useHistory();

  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value)
      return setError("Password don't match");

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to Update your Email");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Update Profile</h1>
          <p>Please fill in this form to update an account.</p>
          <p className={error ? "Errorbtn" : ""}>{error}</p>
          <hr />

          <input
            type="email"
            placeholder="Enter Email"
            ref={emailRef}
            required
            defaultValue={currentUser.email}
          />

          <input
            type="text"
            placeholder="Enter UserName"
            ref={userNameRef}
            required
            defaultValue={name}
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
              Update
            </button>
            <Link to="/" className="cancelbtn">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
