import React from 'react';
import { CustomNavbar } from './Navbar';
import './App.css';
import Main from './Main';
import Additional from './Additional';
// import { Route, Routes} from 'react-router-dom'

export default function App(){
  return(
   <>
      
      <CustomNavbar />
      <Main />
       <Additional />
      {/* <Routes> 
        <Route path='/' element={<CustomNavbar />} />
      </Routes>  */}
  </>);
}