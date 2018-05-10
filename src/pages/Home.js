import React from "react";
import {
    Container, Col, Row
   } from 'reactstrap';
import "../css/search.css";
import SearchBar from '../components/SeachBar'

const Home = ({location}) => (
    <Container fluid className='landing '>
    <Row className='h-100 justify-content-center align-items-center'>
        <Col sm="12" md={{ size: 8 }}>
            <div className='search-container'>
                <h1>Find your new home</h1>
                <SearchBar />
            </div>
        </Col>
    </Row>
    </Container>
   );
   
export default Home;
