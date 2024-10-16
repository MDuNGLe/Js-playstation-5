import React, { useState } from 'react';
import PS from '../assets/Playstation.png';

const Console = ({ onToggleConsole }) => {
    const [consoleOn, setConsoleOn] = useState(false);

    const toggleConsole = () => {
        setConsoleOn(!consoleOn);
        onToggleConsole(!consoleOn);  // Уведомляем MainPage о состоянии консоли
    };

    return (
        <button onClick={toggleConsole} style={{ cursor: 'pointer', position: 'absolute', top: '390px', left: '400px' }}>
            <img src={PS} alt="Playstation" className="m-0 p-0 block"/>
        </button>
    );
};

export default Console;
