import React from "react";
import {
  Link
} from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Header from "../components/Header.js"

const Results = () => (
  <div>

    <Header />
      <ListGroup>
        <ListGroupItem><Link to="/details">Cras justo odio</Link></ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
  </div>
   );
   
export default Results;
