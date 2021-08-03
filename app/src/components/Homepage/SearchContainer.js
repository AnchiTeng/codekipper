import React from 'react';
import { Container, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  searchContainer: {
    width: '100%',
    gridArea: 'search',
    background: 'lightblue',
    color: 'white',
    margin: 0,
    padding: 0,
    border: '1px solid black',
  }, 
  addButton: {
    height: '100%',
    width: '50px',
    margin: 0,
    padding: 0,
    border: '1px solid black',
  },
  textField: {
    width: 'calc(100% - 70px - 10px)',
    height: '100%',
    marginLeft: '5px',
    justifyContent: 'flex-end',
    border: 'none',
  },
});

const SearchContainer = ({ searchQuery, onSearchQueryChange }) => {
  const classes = useStyles();
  return (
    <Container className={classes.searchContainer}>
      <Button className={classes.addButton}>
          <AddIcon />
        </Button>
        <TextField
          className={classes.textField}
          id="search-query"
          value={searchQuery}
          label="Search"
          onChange={e => onSearchQueryChange(e.target.value)}
        />
   
    </Container>
  )
};

export default SearchContainer;