import React from "react";
import ReactCircleModal from "react-circle-modal";
import { PlusSquareOutlined, FolderAddOutlined } from "@ant-design/icons";
import { Layout, Button, Input } from "antd";
import TextField from '@material-ui/core/TextField';

export default function FolderForm ({codeModalOpen, setCodeModalOpen, codeSnippets, setCodeSnippets}) {

  const handleCodeModalOpen = (e) => {
    e.preventDefault()
    codeModalOpen = true;
    setCodeModalOpen(codeModalOpen);
  }
  const handleCodeModalClose = (e) => {
    e.preventDefault();
    codeModalOpen = false;
    setCodeModalOpen(codeModalOpen);
  }

  return (
    <ReactCircleModal
      backgroundColor="#97349a"
      toogleComponent={(onClick) => (
        <Button
          onClick={onClick}
          type="primary"
          icon={<FolderAddOutlined />}
          size={"medium"}
        >
        </Button>
      )}
      
    >
      {(onClick) => (
        <div style={{ backgroundColor: "#fff", padding: "1em" }}>
          <h1>New Folder</h1>
          <form>
            <TextField id="standard-basic" label="Folder Name"/>
            <TextField id="standard-basic" label="Language"/>
            
          </form>
          <button onClick={onClick}>Exit</button>
        </div>
      )}
    </ReactCircleModal>
  );
};


