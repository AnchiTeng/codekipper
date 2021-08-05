import GoogleLogin from 'react-google-login';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory()
  const responseGoogle = (response) => {
    console.log(response);
  }
  function redirectToHomepage() {
    history.push('/homepage');
  }
  return (
    <div className="Login">
       <GoogleLogin
        clientId="6961252266-vghv7d662oki19ad9ven0r5vfpav6kin.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={redirectToHomepage}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default LoginPage;