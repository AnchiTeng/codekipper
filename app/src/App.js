import logo from "./logo.svg";
import "./App.css";
import CreateCodeSnippet from "./components/CodeSnippetForm.js";
import GoogleLogin from 'react-google-login';
function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>test test</p>
      </header>
      <CreateCodeSnippet />
      <GoogleLogin
    clientId="6961252266-vghv7d662oki19ad9ven0r5vfpav6kin.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

    </div>
  );
}

export default App;
