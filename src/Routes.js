import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Container, Button, Col, Row } from "reactstrap";
import Home from "./pages/Home.js"
import Results from "./pages/Results.js"
import Details from "./pages/Details.js"

const Routes = () => (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/results" component={Results}/>
        <Route path="/details" component={Details}/>
      </div>
    </Router>
  )

  export default Routes;