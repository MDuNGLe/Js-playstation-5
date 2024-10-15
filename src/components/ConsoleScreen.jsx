import React from "react";
import Header from './Header.jsx';
import '../index.css';

const ConsoleScreen = ({ isScreenOn }) => {
    return (
        <div className={`console-screen w-[100px] ${isScreenOn ? 'bg-green-500' : 'bg-black'}`}>
            <Header />
            <p className="text-center">{isScreenOn ? 'Экран включен' : 'Экран выключен'}</p>
        </div>
    );
};

export default ConsoleScreen;
