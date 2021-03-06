import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";


function App() {  
  return (
    
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/loginpage">
              <LoginPage />
            </Route>
            <Route path="/homepage">
              <HomePage />
            </Route>
            <Route path="*">
              <LoginPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
