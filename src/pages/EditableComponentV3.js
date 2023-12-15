import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const EditableList = () => {
  const initialItems = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ];

  const [items, setItems] = useState(initialItems);
  const [editingId, setEditingId] = useState(null);
  const [content, setContent] = useState('');

  const handleEditClick = (id, text) => {
    if (editingId === null) {
      setEditingId(id);
      setContent(text);
    } else {
      // If already editing, save the changes before starting to edit the new item
      handleSaveClick(editingId);
      setEditingId(id);
      setContent(text);
    }
  };

  const handleSaveClick = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, text: content } : item
    );
    setItems(updatedItems);
    setEditingId(null);
    setContent('');
  };

  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          {editingId === item.id ? (
            <>
              <TextField
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                onClick={() => handleSaveClick(item.id)}
              >
                Save
              </Button>
            </>
          ) : (
            <>
              <ListItemText primary={item.text} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(item.id, item.text)}>
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
