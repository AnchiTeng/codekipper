import "./App.css";
import CreateCodeSnippet from "./components/CodeSnippetForm.js";
import Homepage from "./components/Homepage";
import { Layout, Button, Input } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
const { Header} = Layout;
const { Search } = Input;


function App() {
  const onSearch = value => console.log(value);

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

      {/* <CreateCodeSnippet /> */}
    </div>
  );
}

export default App;
