import {useState} from "react";
export default function Conditional(){
    const [isLoggedin,setLoggedin]=useState(false);
    const checked = (event)=>{
        event.target.value ==="Login" ? setLoggedin(true) : setLoggedin(false);
        
    }
}