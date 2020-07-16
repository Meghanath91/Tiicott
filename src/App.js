//import all dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./components/Search/Search";
import Students from "./components/Students/Students";
import Home from "./components/Home/Home";
import axios from "axios";
import "./App.css";

function App() {
  //define state to store data from backend
  const [data, setData] = useState({});
  //to mount data to components
  useEffect(() => {
    //get request to backend api
    axios.get("http://localhost:8080/api/students").then((res) => {
      const students = res.data;
      //change state
      setData(students.students);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Home />
        <Switch>
          <Route path="/students">
            <Students students={data} />
          </Route>

          <Route path="/search">
            <Search students={data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
