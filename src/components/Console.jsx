import PS from '../assets/Playstation.png';
import React from "react";

const Playstation = ({ toggleScreen, screenOn }) => {
    return (
        <div>
            <p className="text-center mb-4">
                {screenOn ? 'Экран включен' : 'Экран выключен'}
            </p>
            <button style={{ position: 'absolute', top: '390px', left: '400px' }} onClick={toggleScreen}>
                <img src={PS} alt="Playstation" className="m-0 p-0 block"/>
            </button>
        </div>
    );
};

export default Playstation;
