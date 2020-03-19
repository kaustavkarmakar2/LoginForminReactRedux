import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Foooter from "./components/footer";
import Signup from "./components/sineup";



function App() {
  
  return (
    
    <BrowserRouter>
      <div className="App">
      
        <Navbar/>
        <Switch >
          <Route path="/home" component={Home}/>
          
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          
        </Switch>
        <Foooter/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
