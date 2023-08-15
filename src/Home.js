import {Search} from './Search';
import {Container} from './Container';
import { useState } from 'react';
import {Radio} from './Radio';
export function Home(){
    const[query,setQuery]=useState("");
    const handelData=(data)=>(setQuery(data));
    return(
        <div className="App">
        <h1>welcome to home page 😊</h1>
        <h3>
            <Search onQuery={handelData}/>
            <Container query={query}/>
            <Radio/>
        </h3>
        </div>
    )
}