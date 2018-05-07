import React from "react";
import {
    Link
  } from 'react-router-dom'
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
   } from 'reactstrap';
import "../css/search.css";

const SearchBar = ({location}) => (
    <InputGroup>
        <Input placeholder="Search" />
        <InputGroupAddon addonType="append">
        <Link to="/results">
        <Button color="primary">Go</Button>
        </Link>
        </InputGroupAddon>
    </InputGroup>
   );
   
export default SearchBar;
