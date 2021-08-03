import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Button, TextField, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  folderContainer: {
    gridArea: 'folder',
    background: 'gray',
    margin: 0,
    padding: 0,
  },
  button: {
    width: '50px',
    height: '50px',
    background: 'blue',
    color: 'white',
    margin: '5px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `${props => props.activeFolder ? '1px solid green' : 'none'}`
  },
});

const FolderContainer = ({
  changeActiveFolder, 
  folders, 
  activeFolder,
}) => {
  const classes = useStyles();

  return (
    <Container className={classes.folderContainer}>
      {folders.map((folder, index) => {
        return (
          <Button 
            key={uuidv4()} 
            className={classes.button}
            onClick={() => changeActiveFolder(folder.id)}
            activeFolder={activeFolder === folder.id}
          >
            {folder.name}
          </Button>
        );
      }
      )}
    
    </Container>
  )

}

export default FolderContainer;