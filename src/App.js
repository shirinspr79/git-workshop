import React from 'react';
import { CustomNavbar } from './Navbar';
import './App.css';
import Main from './Main';
// import { Route, Routes} from 'react-router-dom'

export default function App(){
  return(
   <>
      
      <CustomNavbar />
      <Main />
      {/* <Routes> 
        <Route path='/' element={<CustomNavbar />} />
      </Routes>  */}
  </>);
}