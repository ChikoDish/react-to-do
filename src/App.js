import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Forget from "./components/Forget";
import ChangePass from "./components/ChangePass";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/landing">
            <Landing />
          </Route>
          <Route exect path="/signup">
            <Signup />
          </Route>
          <Route exect path="/login">
            <Login />
          </Route>
          <Route exact path="/forget">
            <Forget />
          </Route>
          <Route exact path="/change">
            <ChangePass />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
