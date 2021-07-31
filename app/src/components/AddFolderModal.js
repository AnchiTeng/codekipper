import React, { useState } from 'react';
import { Container } from '@material-ui/core';

const AddFolderModal = () => {
  const [folderName, setFolderName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const folderName = this.folderName.value;
    setFolderName(folderName);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>Folder Name:</label>
        <input
          type="text"
          name="folderName"
          placeholder="Folder Name"
          value={folderName}
          onChange={(event) => setFolderName(event.target.value)}
        />
        <input type="submit" value="Add Folder" />
      </form>
    </Container>
  );
};

export default AddFolderModal;

