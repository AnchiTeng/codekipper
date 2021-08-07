import SideMenu from "./SideMenu";
import GoogleLogin from "react-google-login";
import { Layout, Button, Input } from "antd";
import { PlusSquareOutlined, FolderAddOutlined } from "@ant-design/icons";
import React, {useState} from 'react';

// Import Components
import FolderForm from "./FolderFormPopup.js";
import CodeSnippetForm from "./CodeSnippetFormPopup.js"
const { Header } = Layout;
const { Search } = Input;

function HomePage() {
  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [folderModalOpen, setFolderModalOpen] = useState(false);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [folders, setFolders] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);

  const onSearch = (value) => console.log(value);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // target and searchQuery state not in sync
    console.log('target:', e.target.value);
    
  }
  console.log('search:', searchQuery);
  return (
    <div className="Homepage">
      <Layout>
        <Header
          className="header"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >

          <div>
            <FolderForm folderModalOpen={folderModalOpen} setFolderModalOpen={setFolderModalOpen} folders={folders}setFolders={setFolders} languages={languages} setLanguages={setLanguages}/>
          </div>
          <div>
            <CodeSnippetForm codeModalOpen={codeModalOpen} setCodeModalOpen={setCodeModalOpen}
            codeSnippets={codeSnippets}
            setCodeSnippets={setCodeSnippets}/>
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
        <SideMenu />
      </Layout>
    </div>
  );
}

export default HomePage;
