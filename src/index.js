import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home} from './Home';
import {Contact} from './Contact';
import {ListEmp} from './ListEmp';
import {Nopage} from './Nopage';
import {Empdelete} from './Empdelete';
// import Formexample from './formexample';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Employee } from './Employee';
import {Empedit, EmpUpdate} from './EmpUpdate';
import {Emppost} from './Emppost';
import {Product} from './Product';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<App />} >
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="ListEmp" element={<ListEmp />} />
          <Route path="*" element={<Nopage />} />
          <Route path="emp/:id" element={<Employee />} />
          <Route path="empedit/:id" element={<Empedit />} />
          <Route path="empdel/:id"  element={<Empdelete/>} />
          <Route path="empPost/" element={<Emppost />} />
          <Route path="product" element={<Product/>}/>
          {/* element==componentName   */}
   </Route>
   </Routes>
  </BrowserRouter> 
  {/* <App/>
  <Formexample/> 
  <Header/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
