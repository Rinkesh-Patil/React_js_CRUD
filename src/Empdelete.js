import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
export function Empdelete(props){
    const [emp,setEmp] = useState({});
    const {id}=useParams();
    let navigate = useNavigate();
    useEffect(()=>{
        fetch("https://localhost:7041/api/Employee/"+id).then(res=>res.json()).then((data)=>setEmp(data));
    },{});
    const handledelete = (event) => {
        alert("sure!!!");
        fetch("https://localhost:7041/api/Employee/" + id, {
            method: 'Delete'
        })
            .then(res => console.log(res))
        navigate('/ListEmp');
    }
    return(
        <div>
           <h1>R you sure</h1>
            <label>Id:</label>
            {emp.id}<br />
            <label>name:</label>
            {emp.name}<br />
            <label>Email:</label>
            {emp.email}<br />
            <label>Department:</label>
            {emp.department}<br />
            
            <form>
                <button onClick={handledelete}>Delete</button>
            </form>

        </div>
    )
}