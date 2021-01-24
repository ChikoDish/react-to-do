import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authentication } from "./ProtectedRoutes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const signin = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      axios
        .post("http://localhost:5000/login", { email, password })
        .then((response) => {
          authentication.isLoggedIn = true;
          localStorage.setItem("user", JSON.stringify(response.data.message));
          history.push("/landing");
        })
        .catch((error) => setError("User Already exist"));
    } else {
      setError("Please enter valid details");
    }
  };
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign In
      </p>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form className="form1" onSubmit={signin}>
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
          Sign In
        </button>
      </form>
      <p className="forgot" align="center">
        <Link to="/Forget">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default Login;
