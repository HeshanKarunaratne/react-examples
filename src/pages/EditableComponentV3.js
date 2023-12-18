import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Button,
} from '@material-ui/core';
import { Edit as EditIcon, Save as SaveIcon, Cancel as CancelIcon } from '@material-ui/icons';

const EditableList = () => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedValue, setEditedValue] = useState('');
  const data = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const handleEditClick = (index, value) => {
    setEditIndex(index);
    setEditedValue(value);
  };

  const handleSaveClick = (index) => {
    
    const newData = [...data];
    newData[index] = editedValue;
  
    console.log(newData);
    setEditIndex(index);
  };

  const handleCancelClick = () => {
    // Reset edit state without saving
    setEditIndex(null);
  };

  const handleInputChange = (event) => {
    setEditedValue(event.target.value);
  };

  return (
    <List>
      {data.map((item, index) => (
        <ListItem key={index}>
          {editIndex === index ? (
            <>
              <TextField
                value={editedValue}
                onChange={handleInputChange}
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSaveClick(index)}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
              <IconButton onClick={handleCancelClick} edge="end">
                <CancelIcon />
              </IconButton>
            </>
          ) : (
            <>
              <ListItemText primary={item} />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => handleEditClick(index, item)}
                  edge="end"
                >
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default EditableList;
