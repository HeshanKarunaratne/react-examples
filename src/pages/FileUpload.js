import React, { useState, useRef } from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div>
            <input
                type="text"
                value={selectedFile ? selectedFile.name : ''}
                readOnly
            />
            <button onClick={() => fileInputRef.current.click()}>Select File</button>
            <input
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
            />
        </div>
    );
};

export default FileUpload;
