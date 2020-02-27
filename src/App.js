import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";




function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
