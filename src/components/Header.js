import React from "react";
import {
    Container, Col, Row
   } from 'reactstrap';
import logo from "../logo.svg";
import "../css/search.css";
import SearchBar from './SeachBar'

const Header = ({location}) => (
    <Container fluid className="header">
        <Row>
        <Col xs="12">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">HomeHero</h1>
            </header>     
        </Col>
        </Row>
    </Container>
   );
   
export default Header;
