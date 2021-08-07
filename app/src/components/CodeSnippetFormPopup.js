import React from "react";
import ReactCircleModal from "react-circle-modal";
import { PlusSquareOutlined, FolderAddOutlined } from "@ant-design/icons";
import { Layout, Button, Input } from "antd";
import TextField from '@material-ui/core/TextField';

export default function CodeSnippetForm ({codeSnippets, setCodeSnippets}) {


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
          <form>
            <TextField id="standard-basic" label="Code Snippet Name"/>
            <TextField id="standard-basic" label="Code Snippet Content"/>
            <TextField id="standard-basic" label="Folder"/>
            <TextField id="standard-basic" label="Language"/>
            
          </form>
          <button onClick={onClick}>Exit</button>
        </div>
      )}
    </ReactCircleModal>
  );
};


