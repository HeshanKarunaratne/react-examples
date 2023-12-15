import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const EditableComponent = () => {
    const [editMode, setEditMode] = useState(false);
    const [content, setContent] = useState('Initial content');
    const [prevContent, setPrevContent] = useState('Initial content');

    const handleEditClick = () => {
        setPrevContent(content); 
        setEditMode(!editMode);
    };

    const handleSaveClick = () => {
        setEditMode(false);
    };

    const handleCancelClick = () => {
        setContent(prevContent);
        setEditMode(false);
    };

    return (
        <div>
            {editMode ? (
                <div>
                    <TextField
                        label="Edit content"
                        variant="outlined"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleSaveClick}>
                        Save
                    </Button>
                    <Button variant="contained" onClick={handleCancelClick}>
                        Cancel
                    </Button>
                </div>
            ) : (
                <div>
                    <Typography variant="body1">{content}</Typography>
                    <Button variant="contained" onClick={handleEditClick}>
                        Edit
                    </Button>
                </div>
            )}
        </div>
    );
};

export default EditableComponent;
