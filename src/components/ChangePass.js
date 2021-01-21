import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const changePassword = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email !== "" && password !== "") {
      axios
        .post("http://localhost:5000/login", { email, password })
        .then((response) => alert(response))
        .catch((error) => setError("User Already exist"));
    } else {
      setError("Please enter valid details");
    }
  };
  return (
    <div className="main">
      <p className="sign" align="center">
        Change Password
      </p>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form className="form1" onSubmit={changePassword}>
        <input
          className="un"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="pass"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="submit" align="center" type="submit">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Login;
