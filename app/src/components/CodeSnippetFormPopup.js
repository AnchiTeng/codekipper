import React, { useState } from "react";
import ReactCircleModal from "react-circle-modal";
import { useMutation } from "@apollo/client"
import { PlusSquareOutlined, FolderAddOutlined } from "@ant-design/icons";
import { Layout, Button, Input, Select } from "antd";
import TextField from '@material-ui/core/TextField';
import { addSnippetsMutation } from '../graphql/mutations'
const { Option } = Select;

export default function CodeSnippetForm ({codeSnippets, setCodeSnippets, folders, languages}) {
  const [mutateFunction, { data, loading, error }] = useMutation(addSnippetsMutation);
  const [snippetName, setSnippetName ] = useState("");
  const [snippetContent, setSnippetContent] = useState("");
  const [snippetFolder, setSnippetFolder] = useState("");
  const [language, setLanguage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCodeSnippets = codeSnippets
    newCodeSnippets.push({
      name: snippetName,
      content: snippetContent,
      folder: snippetFolder,
      language: language
    })
    setCodeSnippets(newCodeSnippets);
    setSnippetName("");
    setSnippetContent("");
    setSnippetFolder("");
    setLanguage("");
  }

  const handleLangaugeChange = (value) => {
    setLanguage(value);
  }

  const handleFolderChange = (value) => {
    setSnippetFolder(value);
  }

  return (
    <ReactCircleModal
      backgroundColor="#001529"
      toogleComponent={(onClick) => (
        
        <Button
          onClick={onClick}
          type="primary"
          icon={<PlusSquareOutlined />}
          size={"medium"}
        >
        </Button>
      )}
      
    >
      {(onClick) => (
        <div style={{ backgroundColor: "#fff", padding: "1em" }}>
          <p>New Code Snippet</p>
          <form onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Code Snippet Name" onChange={e => setSnippetName(e.target.value)}/>
            <br></br>
            <TextField id="standard-basic" label="Code Snippet Content" onChange={e => setSnippetContent(e.target.value)}/>
            <br></br>
            <Select id="standard-basic" label="Folder" style={{width: '50%'}}onChange={handleFolderChange}>
              {folders.map(folder => <Option key={folder} value={folder}>{folder}</Option>)}
              </Select>
            <br></br>
            <Select id="standard-basic" label="Language" style={{width: '50%'}} onChange={handleLangaugeChange}>
              {languages.map(language => 
              <Option key={language} value={language}>{language}</Option>)}
            </Select>
            
          </form>
          <button onClick={onClick}>Create Code Snippet</button>
          <button onClick={onClick}>Exit</button>
        </div>
      )}
    </ReactCircleModal>
  );
};


