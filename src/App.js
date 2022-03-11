import React, { useState } from 'react';
import { mdiAccount, mdiBellAlert, mdiCog, mdiHome, mdiMessage } from '@mdi/js';
import Icon from '@mdi/react';

import './App.css';

function App() {
    const [navIndex, setNavIndex] = useState(0);
    const setIndex = (index) => () => {
        setNavIndex(index);
    };
    return (
        <div className="nav_window">
            <div className="nav_body">
                <div className={`item_body ${navIndex === 0 ? 'active' : ''}`} onClick={setIndex(0)}>
                    <p>Home</p>
                    <Icon path={mdiHome} size={1} />
                </div>
                <div className={`item_body ${navIndex === 1 ? 'active' : ''}`} onClick={setIndex(1)}>
                    <p>Messages</p>
                    <Icon path={mdiMessage} size={1} />
                </div>
                <div className={`item_body ${navIndex === 2 ? 'active' : ''}`} onClick={setIndex(2)}>
                    <p>Notifications</p>
                    <Icon path={mdiBellAlert} size={1} />
                </div>
                <div className={`item_body ${navIndex === 3 ? 'active' : ''}`} onClick={setIndex(3)}>
                    <p>Account</p>
                    <Icon path={mdiAccount} size={1} />
                </div>
                <div className={`item_body ${navIndex === 4 ? 'active' : ''}`} onClick={setIndex(4)}>
                    <p>Settings</p>
                    <Icon path={mdiCog} size={1} />
                </div>
                <div className="indicator"></div>
            </div>
        </div>
    );
}

export default App;
