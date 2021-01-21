import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [sent, setSend] = useState(false);
  const [text, setText] = useState("Forget Password");
  const [show, setShow] = useState(false);
  let history = useHistory();
  const forget = (e) => {
    e.preventDefault();
    setSend(true);
    setShow(true);
    setText("Submit OTP");
  };
  const otpSubmit = (e) => {
    e.preventDefault();
    setText("Forget Password");
    setSend(false);
    setShow(false);
    history.push("/change");
  };
  return (
    <div className="main">
      <p className="sign" align="center">
        Forget Password
      </p>
      <form className="form1" onSubmit={!sent ? forget : otpSubmit}>
        <input
          className="un"
          type="text"
          placeholder="email"
          style={{ display: !show ? "block" : "none" }}
        />
        <input
          className="un"
          type="text"
          placeholder="otp"
          style={{ display: !show ? "none" : "block" }}
        />
        <button type="submit" className="submit">
          {text}
        </button>
      </form>
    </div>
  );
};

export default Forget;
