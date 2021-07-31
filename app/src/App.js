import { useState } from 'react';
import { Container, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  mainContainer: {
    width: '100%', 
    margin: 0, 
    padding: 0,
    display: 'grid', 
    gridTemplateAreas: 
    `
    "search search search search"
    "folder code code code"
    "folder code code code"
    "folder code code code"
    "folder code code code"
    `
  },
  searchContainer: {
    width: '100%',
    height: '100%',
  }, 
  folderContainer: {

  }, 
  codeContainer: {
  
  },
});

const App = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [folderModalOpen, setFolderModalOpen] = useState(false);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState(null);
  const [folders, setFolders] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);


  return (
    <Container className={classes.mainContainer}>
      <Container className={classes.searchContainer}>
        <Button>
          <AddIcon />
        </Button>
        <TextField
          id="search-query"
          value={searchQuery}
          label="Search"
          onChange={e => setSearchQuery(e.target.value)}
        />
      </Container>
    </Container>
  );
}

export default App;
