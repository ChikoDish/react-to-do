import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signin = (e) => {
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
    <div class="main">
      <p class="sign" align="center">
        Sign In
      </p>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form class="form1" onSubmit={signin}>
        <input
          class="un"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          class="pass"
          align="center"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button class="submit" align="center" type="submit">
          Sign In
        </button>
      </form>
      <p class="forgot" align="center">
        <Link to="/Forget">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default Login;
