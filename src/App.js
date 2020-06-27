import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// import Page1 from "./pages/KnowledgeHub/";
import KnowledgeHub from "./pages/KnowledgeHub/";
import CSR from "./pages/CSR/";
import AboutUs from "./pages/AboutUs";
import DistributedEnergy from "./pages/DistributedEnergy";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={KnowledgeHub} />

          <Route path="/about-us">
            <AboutUs />
          </Route>

          <Route path="/distributed-energy">
            <DistributedEnergy />
          </Route>

          <Route path="/csr">
            <CSR />
          </Route>

          <Route path="/knowledge-hub">
            <KnowledgeHub />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
