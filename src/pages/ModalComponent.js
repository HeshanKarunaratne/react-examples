import React from 'react';

const ModalComponent = ({ isOpen, onClose, children }) => {

    const modalStyles = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        zIndex: 1000,
        display: isOpen ? 'block' : 'none',
    };

    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: isOpen ? 'block' : 'none',
                    zIndex: 999,
                }}
                onClick={onClose}
            />

            <div style={modalStyles}>
                <button

                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: '#e74c3c',
                        color: '#fff',
                        padding: '8px 12px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}
                    onClick={onClose}
                >
                    X
                </button>

                {children}
            </div>
        </div>
    );
};

export default ModalComponent;
