import {React,useState,useEffect} from 'react';
export function Container({query}){
    const[list,setList]=useState([]);
    useEffect(()=>{
        fetch("ejson.json").then(res=>res.json())
        .then(data=>setList(data))
    },[]);
    const arr =list.filter((data)=>data.gender.toLowerCase()===query.toLowerCase());
    const ar= arr ;          //arr.length===0?list:arr;
    return(
        <ul> Data ⬇️
           {ar.map((listItem)=>(
            <li key={listItem.code}>
                {listItem.code}
            </li>
           ))}
        </ul>
    )
}