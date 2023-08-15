import React from 'react';
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
export function Product(props){
    const[product,setProduct] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then((result)=>{setProduct(result);});
    },[]);
    return(
        <>
    <div>
        <h3>
            Products Details 📃
        </h3>
        <Table striped hover variant="dark">
        {" "}
        <thead>
          <tr>
            <th>Id</th>
            <th> Product Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product,i) => (
            <tr key={product.proid}>
              <td>{i}</td>
              <td>{product.proname}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
    </>
  )  
}