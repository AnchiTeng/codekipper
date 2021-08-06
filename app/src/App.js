import React, { useState } from 'react';
import "./App.css";
import CreateCodeSnippet from "./components/CodeSnippetForm.js";
import HomePage from "./components/Homepage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "./components/LoginPage";




function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [folderModalOpen, setFolderModalOpen] = useState(false);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [folders, setFolders] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);
  
  return (
    <div className="App">
      {/* <CreateCodeSnippet /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/loginpage">
            <LoginPage />
          </Route>
          <Route path="/homepage">
            <HomePage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
