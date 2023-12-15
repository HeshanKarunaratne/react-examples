import React, { useState } from 'react';

const MyList = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        { name: 'item1', subitems: ['subItem1', 'subItem2'] },
        { name: 'item2', subitems: ['subItem3', 'subItem4'] },
        { name: 'item3', subitems: ['subItem5'] },
    ];

    const handleItemClick = (itemName) => {
        setSelectedItem((prevSelectedItem) =>
            prevSelectedItem === itemName ? null : itemName
        );
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.name}>
                    <div onClick={() => handleItemClick(item.name)}>
                        {item.name} {selectedItem === item.name ? '[-]' : '[+]'}
                    </div>
                    {selectedItem === item.name && (
                        <ul>
                            {item.subitems.map((subitem) => (
                                <li key={subitem}>{subitem}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MyList;
