import Navbar from "./components/Navbar"
import './App.css';
import { Switch, Route } from "react-router-dom";
import {BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
   <Navbar/>
   <Switch>
   <Route path ="/"/>
   </Switch>
   </Router>
    </>
  );
}

export default App;
