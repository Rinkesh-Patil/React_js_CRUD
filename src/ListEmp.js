import React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function ListEmp(props) {
    const [employees, setEmployee] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7041/api/Employee")
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    return (
        <div>
            <h2>Employees Data...</h2>
            <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/Admin">Admin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/empPost">Add Employee</Nav.Link>
            <Nav.Link href="/product">Get Product Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>          
<table><thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                 </tr>
            </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td> <a href={'/emp/' + emp.id}>display</a></td>
                            <td> <a href={'/empedit/' + emp.id}>Edit</a></td>
                            <td> <a href={'/empdel/' + emp.id}>delete</a></td>

                        </tr>
                    ))}
                </tbody></table></div>
    );
}