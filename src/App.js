import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Forget from "./components/Forget";
import ChangePass from "./components/ChangePass";
import Header from "./components/Header";
import { useState } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { UserContext } from "./contexts/userContext";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <UserContext.Provider value={user}>
            <ProtectedRoutes
              exact
              path="/landing"
              component={Landing}
            ></ProtectedRoutes>
          </UserContext.Provider>
          <Route exect path="/signup" component={Signup}></Route>
          <Route exect path="/login" component={Login}></Route>
          <Route exact path="/forget" component={Forget}></Route>
          <Route exact path="/change" component={ChangePass}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
