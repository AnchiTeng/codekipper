import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';

// Form component that allows you to create a new code snippet.
function CreateCodeSnippet(props) {
  const [snippetName, setSnippetName ] = useState("");
  const [snippetContent, setSnippetContent] = useState("");
  const [snippetFolder, setSnippetFolder] = useState("");
  // States: snippetName - name of code snippet
  // snippetContent - code you want to save
  // snippetFolder - folder or category you want to save your code snippet into

  // Event Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sumbitting Code Snippet: ${snippetName}`);
    console.log(`Sumbitting Code Snippet: ${snippetName}`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Code Snippet Name" value={snippetName} onChange={e => setSnippetName(e.target.value)} />
      <TextField id="standard-basic" label="Code Snippet Content" value={snippetContent} onChange={e => setSnippetContent(e.target.value)} />
      <TextField id="standard-basic" label="Folder" value={snippetFolder} onChange={e => setSnippetFolder(e.target.value)}/>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CreateCodeSnippet;
