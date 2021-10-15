import React from "react";
import {BrowserRouter} from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main"; 

import Routes from "./Routes";

import "./App.css";

function App  ()  {

  return (   

    <BrowserRouter>  
        <Sidebar />
        <Routes />   
    </BrowserRouter>

  );
  
}

export default App;
