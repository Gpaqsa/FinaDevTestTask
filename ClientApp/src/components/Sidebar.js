import React, { useState } from 'react';
import './Sidebar.css';



const TreeMenu = () => {
    const [active, setActive] = useState([]);
    console.log(active);

    const handleToggle = (index) => {
        setActive((prevActive) => {
            const newActive = [...prevActive];
            newActive[index] = !newActive[index];
            return newActive;
        });
    };

    return (
        <aside className="aside-box">
            <ul id="myUL">
                <li>
                    <span className={`caret ${active[0] ? 'caret-down' : ''}`} onClick={() => handleToggle(0)}>
                        პროდუქტები
                    </span>
                    <ul className={`nested ${active[0] ? 'active' : ''}`}>
                        <li>
                            <span className={`caret ${active[1] ? 'caret-down' : ''}`} onClick={() => handleToggle(1)}>აგრარული</span>
                            <ul className={`nested ${active[1] ? 'active' : ''}`}>
                                <li><span className={`caret ${active[2] ? 'caret-down' : ''}`} onClick={() => handleToggle(2)}>ხილი</span></li>
                                <li><span className={`caret ${active[3] ? 'caret-down' : ''}`} onClick={() => handleToggle(3)}>ბოსტნეული</span></li>
                            </ul>
                        </li>
                        <li>
                            <span className={`caret ${active[4] ? 'caret-down' : ''}`} onClick={() => handleToggle(4)}>კვება</span>
                            <ul className={`nested ${active[4] ? 'active' : ''}`}>
                                <li><span className={`caret ${active[5] ? 'caret-down' : ''}`} onClick={() => handleToggle(5)}>სასმელები</span></li>
                                <li><span className={`caret ${active[6] ? 'caret-down' : ''}`} onClick={() => handleToggle(6)}>კერძები</span></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
};

export default TreeMenu;
