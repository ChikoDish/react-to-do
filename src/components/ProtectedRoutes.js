import React from "react";
import { Redirect, Route } from "react-router-dom";

export const authentication = {
  isLoggedIn: false,
  onAuthentication() {
    console.log(this.isLoggedIn);
    if (localStorage.getItem("user") === "") {
      this.isLoggedIn = true;
    }
    console.log(this.isLoggedIn);
  },
  getLoginStatus() {
    return this.isLoggedIn;
  },
};

const ProtectedRoutes = (props) => {
  return (
    <Route
      path={props.path}
      render={(data) =>
        authentication.getLoginStatus() ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
};

export default ProtectedRoutes;
