import React from "react";
import { Switch, Route } from "react-router-dom";
import DivingBoard from "../pages/diving-board/DivingBoard";

const ProjectRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={DivingBoard} />
      <Route exact path="/dive-board" component={DivingBoard} />
    </Switch>
  );
};

export default ProjectRouter;
