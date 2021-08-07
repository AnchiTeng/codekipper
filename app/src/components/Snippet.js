import React from "react";
import { PlusSquareOutlined, FolderAddOutlined, CopyOutlined } from "@ant-design/icons";
import { Layout, Button, Input } from "antd";
import TextField from '@material-ui/core/TextField';

// Import languages, folders, codeSnippets states
export default function Snippet() {
  
  return (
    <div>
      <div>
        <h1>Code Snippet Name</h1>
        <Button 
          type="primary" 
          icon={<PlusSquareOutlined />} 
          size="medium"
        />
      </div>
      <p>Code Snippet Content</p>
      <p>Folder</p>
      <p>Language</p>
    </div>
  );
};


