import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { useQuery } from "@apollo/client";
import {
  queryEverySnippets
} from './graphql/queries';


function App() {
  const { loading, error, data } = useQuery(queryEverySnippets);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }  
  
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
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
