import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export const handleErrors = async (response) => {
  if (!response.ok) {
    const { message } = await response.json();
    throw Error(message);
  }
  return response.json();
};
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    setError("");
    if (name !== "" && email !== "" && password !== "") {
      axios
        .post("http://localhost:5000/signup", { name, email, password })
        .then((response) => alert(response))
        .catch((error) => setError("User Already exist"));
    } else {
      setError("Please enter valid details");
    }
  };
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign Up
      </p>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form className="form1" onSubmit={register}>
        <input
          type="text"
          className="un"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="un"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          className="pass"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="submit" align="center" type="submit">
          Sign Up
        </button>
      </form>
      <p className="forgot" align="center">
        <Link to="/Login">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
