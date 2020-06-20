import React from "react";
import { Table, Button } from 'react-bootstrap'
import "./style.css";

function Tables(props) {
    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>Employee ID <Button variant="dark" onClick={props.sort} id="id"><i className="fas fa-sort-numeric-down" ></i></Button></th>
                <th>Name<Button variant="dark" onClick={props.sort} id="name"><i className="fas fa-sort-alpha-down"></i></Button></th>
                <th>Occupation<Button variant="dark" onClick={props.sort} id="occupation"><i className="fas fa-sort-alpha-down"></i></Button></th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </Table>
}

export default Tables;

