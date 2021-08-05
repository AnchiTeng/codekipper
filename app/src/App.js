import "./App.css";
import CreateCodeSnippet from "./components/CodeSnippetForm.js";
import HomePage from "./components/Homepage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "./components/LoginPage";




function App() {
  
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
