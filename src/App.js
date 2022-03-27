import Navbar from "./components/Navbar"
import './App.css';
import { Switch, Route } from "react-router-dom";
import {BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home"
import Flights from "./pages/Flights"
import Comment from "./pages/Comment"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact components={Home} />
          <Route path="/flights" components={Flights} />
          <Route path="/comment" components={Comment} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
