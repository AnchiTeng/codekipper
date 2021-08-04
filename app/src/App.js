import "./App.css";
import CreateCodeSnippet from "./components/CodeSnippetForm.js";
import GoogleLogin from 'react-google-login';
import Homepage from "./components/Homepage";
import { Layout, Button, Input } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
const { Header} = Layout;
const { Search } = Input;


function App() {
  const onSearch = value => console.log(value);
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <Layout>
        <Header className="header" style={{display: "flex", justifyContent: 'space-evenly' }}>
          <div>
            <Button type="primary" icon={<PlusSquareOutlined />} size={'medium'} />
          </div>
          <div>
            <Search  style={{marginTop: 17}} placeholder="Snippet Name" onSearch={onSearch} enterButton />
          </div>
        </Header>
        <Homepage className="site-layout-background" />
      </Layout>
      <GoogleLogin
          clientId="6961252266-vghv7d662oki19ad9ven0r5vfpav6kin.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      {/* <CreateCodeSnippet /> */}
    </div>
  );
}

export default App;
