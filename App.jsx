import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Frame656 from "./components/Frame656";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|423_259)">
            <Frame656 src="https://anima-uploads.s3.amazonaws.com/projects/6345ffdfb01783073f412566/releases/636a5afd825c63464a71c4b9/img/frame-656@1x.png" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
