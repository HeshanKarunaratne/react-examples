// YourParentComponent.js

import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

const SimpleModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>

            <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
                <div style={{ marginTop: '2rem' }}>
                    <button onClick={console.log("btn1")}>1</button>
                    <button onClick={console.log("btn2")}>2</button>
                    <button onClick={console.log("btn3")}>3</button>
                </div>

            </ModalComponent>
        </div>
    );
};

export default SimpleModal;
