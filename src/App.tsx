import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectRouter from "./router/Router";

function App() {
  return (
    <div className="App">
      <Router>
        <ProjectRouter />
      </Router>
    </div>
  );
}

export default App;
