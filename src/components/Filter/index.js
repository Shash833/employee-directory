import React from "react";
import "./style.css";
import { Dropdown } from 'react-bootstrap'

function Filter(props) {
    return (<Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Filter by Occupation
</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onClick={props.filterEmployees}>Regional Manager</Dropdown.Item>
            <Dropdown.Item onClick={props.filterEmployees}>Accountant</Dropdown.Item>
            <Dropdown.Item onClick={props.filterEmployees}>Sales Rep</Dropdown.Item>
            <Dropdown.Item onClick={props.filterEmployees}>Receptionist</Dropdown.Item>
            <Dropdown.Item onClick={props.filterEmployees}>Quality Assurance</Dropdown.Item>
            <Dropdown.Item onClick={props.filterEmployees}>HR</Dropdown.Item>
            <Dropdown.Item onClick={props.filterEmployees}>All Occupations</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>)

}

export default Filter;
