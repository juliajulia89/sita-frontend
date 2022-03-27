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
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/flights" component={Flights} />
          <Route path="/comment" component={Comment} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
