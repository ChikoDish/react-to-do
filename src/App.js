import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exect path="/signup">
            <Signup />
          </Route>
          <Route exect path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
