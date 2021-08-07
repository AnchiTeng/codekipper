import SideMenu from "./SideMenu";
import GoogleLogin from "react-google-login";
import { Layout, Button, Input } from "antd";
import { PlusSquareOutlined, FolderAddOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  queryEverySnippets
} from '../graphql/queries';

// Import Components
import FolderForm from "./FolderFormPopup.js";
import CodeSnippetForm from "./CodeSnippetFormPopup.js";
import FolderView from "./FolderView"

const { Header, Content, Sider, Breadcrumb} = Layout
const { Search } = Input;

function HomePage() {
  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFolder, setActiveFolder] = useState(null);
  const [languages, setLanguages] = useState(['JavaScript', 'HTML/CSS', 'Python', 'C#', "Java" ]);
  const [folders, setFolders] = useState(['Folder 1', 'Folder 2', 'Folder 3', 'Folder 4']);
  const [codeSnippets, setCodeSnippets] = useState([{
    id: 1,
    code: `
    <code id="snippet-1">let arr = [1, 3, 5, 7, 8, 9]; <br></br>
let x = 5;<br></br>
   
if (recursiveFunction(arr, x, 0, arr.length-1)) <br></br>
    document.write("Element found!");<br></br>
else document.write("Element not found!");<br></br>
   
x = 6;<br></br>
   
if (recursiveFunction(arr, x, 0, arr.length-1))<br></br>
    document.write("Element found!");<br></br>
else document.write("Element not found!");</code><br></br>`, 
    folder: "folder-1",
    language: "javascript",
  }]);

  const { loading, error, data } = useQuery(queryEverySnippets);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }  


  const onSearch = (value) => console.log(value);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // target and searchQuery state not in sync
    console.log("target:", e.target.value);
  };
  console.log("search:", searchQuery);
  return (
    <div className="Homepage">
      <Layout style={{
        height: '100vh'
      }}>
        <Header
          className="header"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div>
            <FolderForm
              folders={folders}
              setFolders={setFolders}
              languages={languages}
              setLanguages={setLanguages}
            />
          </div>
          <div>
            <CodeSnippetForm
              codeSnippets={codeSnippets}
              setCodeSnippets={setCodeSnippets}
              folders={folders}
              languages={languages}
            />
          </div>

          <div>
            <Search
              style={{ marginTop: 17 }}
              placeholder="Snippet Name"
              onSearch={onSearch}
              onChange={handleSearch}
              value={searchQuery}
              enterButton
            />
          </div>
        </Header>
        <Layout>

        
        <Sider width={80} className="site-layout-background">
        <SideMenu activeFolder={activeFolder} setActiveFolder={setActiveFolder}
        languages={languages}
        setLanguages={setLanguages}
        folders={folders}
        setFolders={setFolders}
        codeSnippets={codeSnippets}
        setCodeSnippets={setCodeSnippets}/>

        </Sider>
        <Layout > 
        <FolderView/>
        {/* <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
         
        </Content> */}
      </Layout>
    </Layout>
      </Layout>
    </div>
  );
}

export default HomePage;
