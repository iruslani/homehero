import React, { Component } from "react";

import "./css/App.css";
import "./css/layout.css"
import { Container, Button, Col, Row } from "reactstrap";
import Routes from "./Routes.js"

class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
