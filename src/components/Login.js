import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signin = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email !== "" && password !== "") {
      axios
        .post("http://localhost:5000/signup", { email, password })
        .then((response) => alert(response))
        .catch((error) => setError("User Already exist"));
    } else {
      setError("Please enter valid details");
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form onSubmit={signin}>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
