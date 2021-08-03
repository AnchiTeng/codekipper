import React, { useState } from 'react';
import { Container, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchContainer from './components/Homepage/SearchContainer';
import FolderContainer from './components/Homepage/FolderContainer';


const useStyles = makeStyles({
  mainContainer: {
    width: '100%', 
    height: '100%',
    margin: 0, 
    padding: 0,
    overflow: 'auto',
    display: 'grid', 
    gridTemplateRows: '.20fr repeat(4, 1fr)',
    gridTemplateColumns: '50px repeat(3, 1fr)',
    gridTemplateAreas:`
    "search search search search"
    "folder code code code"
    "folder code code code"
    "folder code code code"
    "folder code code code"
    `
  },
});

const App = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [folderModalOpen, setFolderModalOpen] = useState(false);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState(null);
  const [folders, setFolders] = useState([
    { name: 'Folder', id: 0 },
    { name: 'Folder', id: 1 },
    { name: 'Folder', id: 2 },
  ]);
  const [codeSnippets, setCodeSnippets] = useState([]);


  return (
    <Container className={classes.mainContainer}>
      <SearchContainer searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
      <FolderContainer 
        changeActiveFolder={setActiveFolder} 
        folders={folders} 
        activeFolder={activeFolder} 
      />
    </Container>
  );
}

export default App;
