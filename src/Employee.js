import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Cardmployee from './Cardmployee';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("https://localhost:7041/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    return (
        <>
       <div align = "center"> <Cardmployee  key={id} myEmp={employee}/></div>
       {/* <div align = "center"> <Cardmployee  key={id} myEmp={employee}/></div> */}
       </>
    );
}
export default Employee;