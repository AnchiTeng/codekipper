import SideMenu from "./SideMenu";
import GoogleLogin from "react-google-login";
import { Layout, Button, Input } from "antd";
import { PlusSquareOutlined, FolderAddOutlined } from "@ant-design/icons";
import React, { useState } from "react";

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
  const [languages, setLanguages] = useState(null);
  const [folders, setFolders] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);

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
