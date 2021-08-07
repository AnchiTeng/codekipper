import React from "react";
import { PlusSquareOutlined, FolderAddOutlined, CopyOutlined } from "@ant-design/icons";
import { Layout, Button, Input } from "antd";
import TextField from "@material-ui/core/TextField";
import { Card } from "antd";
// Import languages, folders, codeSnippets states
export default function FolderView() {
  const copySnippet = () => {
    const code = document.getElementById('snippet-1')
    navigator.clipboard.writeText(code.innerText)
  }

  return (
    <div className="site-card-border-less-wrapper" style={{paddingTop: '10vh', paddingBottom:'10vh', textAlign: 'left', display: 'flex'}}>
        <Button 
          type="primary" 
          icon={<CopyOutlined />} 
          size="medium"
          onClick={copySnippet}
        />
      <Card title="Binary Search Tree Driver Code" bordered={false} style={{ width: '75vw', margin: 'auto' }}>
        <code id="snippet-1">let arr = [1, 3, 5, 7, 8, 9]; <br></br>
let x = 5;<br></br>
   
if (recursiveFunction(arr, x, 0, arr.length-1)) <br></br>
    document.write("Element found!");<br></br>
else document.write("Element not found!");<br></br>
   
x = 6;<br></br>
   
if (recursiveFunction(arr, x, 0, arr.length-1))<br></br>
    document.write("Element found!");<br></br>
else document.write("Element not found!");</code><br></br>
       
      </Card>

    </div>
  );
}
