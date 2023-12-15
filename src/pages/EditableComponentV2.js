import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const EditableList = () => {
    const initialItems = [
        { id: 1, content: 'Item 1' },
        { id: 2, content: 'Item 2' },
        { id: 3, content: 'Item 3' },
    ];

    const [items, setItems] = useState(initialItems);

    const handleEditClick = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, editMode: true } : item
            )
        );
    };

    const handleSaveClick = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, editMode: false } : item
            )
        );
    };

    const handleCancelClick = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, editMode: false } : item
            )
        );
    };

    const handleContentChange = (itemId, newContent) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, content: newContent } : item
            )
        );
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    {item.editMode ? (
                        <div>
                            <TextField
                                label="Edit content"
                                variant="outlined"
                                value={item.content}
                                onChange={(e) => handleContentChange(item.id, e.target.value)}
                            />
                            <Button variant="contained" onClick={() => handleSaveClick(item.id)}>
                                Save
                            </Button>
                            <Button variant="contained" onClick={() => handleCancelClick(item.id)}>
                                Cancel
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Typography variant="body1">{item.content}</Typography>
                            <Button variant="contained" onClick={() => handleEditClick(item.id)}>
                                Edit
                            </Button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default EditableList;
