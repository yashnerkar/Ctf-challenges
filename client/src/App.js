import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Challenges from "./components/Challenges";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Instruction from "./components/Instruction";

function App() {
  const [get, setGet] = useState(() => {
    return JSON.parse(sessionStorage.getItem("data"));
  });
  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(get));
  }, [get]);

  const [alert, setAlert] = useState({
    color: null,
    text: null,
    message: null,
    display: "none",
  });
  const showAlert = (res) => {
    const show = res.split(":");
    setAlert({
      color: show[0],
      text: show[1],
      message: show[2],
      display: "block",
    });
    setTimeout(() => {
      setAlert({
        color: null,
        text: null,
        message: null,
        display: "none",
      });
    }, 5000);
  };
  return (
    <Router>
      <Navbar get={get} showAlert={showAlert} /> <Instruction />
      <Alert
        color={alert.color}
        message={alert.message}
        text={alert.text}
        display={alert.display}
      />{" "}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>{" "}
        <Route exact path="/login">
          <Login setGet={setGet} showAlert={showAlert} />{" "}
        </Route>{" "}
        <Route exact path={`/${get}/challenges`}>
          <Challenges get={get} showAlert={showAlert} />{" "}
        </Route>{" "}
      </Switch>{" "}
    </Router>
  );
}
export default App;
