import React from "react";
import ReactCircleModal from "react-circle-modal";
import { PlusSquareOutlined, FolderAddOutlined } from "@ant-design/icons";
import { Layout, Button, Input } from "antd";
import TextField from '@material-ui/core/TextField';

export default function FolderForm ({folders, setFolders, languages, setLanguages}) {


  return (
    <ReactCircleModal
      backgroundColor="#001529"
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
            <br></br>
            <TextField id="standard-basic" label="Language"/>
            
          </form>
          <button onClick={onClick}>Exit</button>
        </div>
      )}
    </ReactCircleModal>
  );
};


