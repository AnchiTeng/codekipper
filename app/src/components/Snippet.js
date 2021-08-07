import React from "react";
import { PlusSquareOutlined, FolderAddOutlined } from "@ant-design/icons";
import { Layout, Button, Input } from "antd";
import TextField from '@material-ui/core/TextField';

// Import languages, folders, codeSnippets states
export default function Snippet() {
  
  return (
    <div>
      <h1>Code Snippet Name</h1>
      <p>Code Snippet Content</p>
      <p>Folder</p>
      <p>Language</p>
    </div>
  );
};


