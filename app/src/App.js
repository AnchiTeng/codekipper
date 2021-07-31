import logo from "./logo.svg";
import "./App.css";
import CreateCodeSnippet from "./components/CodeSnippetForm.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>test test</p>
      </header>
      <CreateCodeSnippet />
    </div>
  );
}

export default App;
