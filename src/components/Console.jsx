import React from "react";
import PS from '../assets/Playstation.png';

const Playstation = ({ toggleScreen, screenOn }) => {
    return (
        <div>
            <button style={{ position: 'absolute', top: '390px', left: '400px' }} onClick={toggleScreen}>
                <img src={PS} alt="Playstation" className="m-0 p-0 block"/>
            </button>
        </div>
    );
};

export default Playstation;
