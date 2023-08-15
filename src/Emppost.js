import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function Emppost(props){
    const[emp,setEmp] = useState(props);
    const navigate=useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmp(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(emp);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7041/api/Employee", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => r.json()).then((data) => data)
        event.preventDefault();
        navigate('/');
        alert(emp);
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <label>Id:</label>
            <input
                type="text"
                name="id"
                onChange={handleChange}
            />            <br /> */}
            <label>name:</label>
            <input
                type="text"
                name="name"
                onChange={handleChange}
            />            <br />
            <label>Email:</label>
            <input
                type="text"
                name="Email"
                onChange={handleChange}
            />            <br />
            <label>Department:</label>
            <input
                type="text"
                name="department"
                onChange={handleChange}
            /> <br />
            <input type="submit" />
        </form>
    );
}