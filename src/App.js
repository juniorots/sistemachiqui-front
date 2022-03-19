import React, { Component } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import LoginChiqui from "./pages/components/login-chiqui";
import HomeChiqui from "./pages/components/home-chiqui";

export const ControlAccess = ({children}) => {
  let location = useLocation();
    if (localStorage.getItem("perfil") === "null")       
      return <Navigate to="/login-chiqui" state={{ from: location }} />;

    return children;    
};  

export const ControlAdmin = ({children}) => {
  let location = useLocation();
    if (localStorage.getItem("perfil") === "comum")       
      return <Navigate to="/painel" state={{ from: location }} />;

    return children;    
};  

class App extends Component {  
  render() {
    return (                 
      <Routes>
        <Route path="/login-chiqui" element={<LoginChiqui />} />                  
        <Route exact path="/" element={<HomeChiqui />} />            
        <Route path="/painel" element={<HomeChiqui />} />        
        {/*
        <Route path="/painel" element={<ControlAccess> <HomeChiqui /> </ControlAccess>} />        
        */}
        {/* <Route path="/add-clientes" 
          element={
              <ControlAccess> 
                <ControlAdmin> 
                  <AddCliente/> 
                </ControlAdmin> 
              </ControlAccess>} 
        />            */}
      </Routes>
    );
  } 
}

export default App;
