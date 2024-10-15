import React, { useState } from 'react';
import ArrowUp from '../assets/up-arrow.svg';
import ArrowDown from '../assets/down-arrow.svg';
import ArrowLeft from '../assets/left-arrow.svg';
import ArrowRight from '../assets/right-arrow.svg';
import Circle from '../assets/button-circle.svg';
import Cross from '../assets/button-cross.svg';
import Square from '../assets/button-square.svg';
import Triangle from '../assets/button-triangle.svg';
import OptionsButton from '../assets/button-options.svg';
import CenterPad from '../assets/center-pad.svg';
import Stick from '../assets/Stick.svg';
import ShareButton from '../assets/button-share.svg';
import MicroButton from '../assets/button-micro.svg';
import PSButton from '../assets/psButton.svg';

const Gamepad = () => {

    return (
        <div>
            {/* Стрелочки */}
            <button style={{position: 'absolute', top: '708px', left: '808px'}}>
                <img src={ArrowUp} alt="Arrow Up" className="m-0 p-0 block"/>
            </button>
            <button style={{position: 'absolute', top: '733px', left: '785px'}}>
                <img src={ArrowLeft} alt="Arrow Left" className="m-0 p-0 block"/>
            </button>
            <button style={{position: 'absolute', top: '750px', left: '808px'}}>
                <img src={ArrowDown} alt="Arrow Down" className="m-0 p-0 block"/>
            </button>
            <button style={{position: 'absolute', top: '733px', left: '827px'}}>
                <img src={ArrowRight} alt="Arrow Right" className="m-0 p-0 block"/>
            </button>

            {/* Основные кнопки */}
            <button style={{position: 'absolute', top: '698px', left: '1081px'}}>
                <img src={Triangle} alt="Triangle" className="m-0 p-0 block"/>
            </button>
            <button style={{position: 'absolute', top: '731px', left: '1049px'}}>
                <img src={Square} alt="Square" className="m-0 p-0 block"/>
            </button>
            <button style={{position: 'absolute', top: '763px', left: '1081px'}}>
                <img src={Cross} alt="Cross" className="m-0 p-0 block"/>
            </button>
            <button style={{position: 'absolute', top: '731px', left: '1113px'}}>
                <img src={Circle} alt="Circle" className="m-0 p-0 block"/>
            </button>

            {/* Вспомогательные кнопки */}
            <button
                style={{position: 'absolute', top: '788px', left: '945px'}}>
                <img src={PSButton} alt="PSButton" className="m-0 p-0 block"/>
            </button>
            <button style={{position: 'absolute', top: '825px', left: '946px'}}>
                <img src={MicroButton} alt="MicroButton" className="m-0 p-0 block"/>
            </button>
            <button style={{position: 'absolute', top: '666px', left: '873px'}}>
            <img src={CenterPad} alt="CenterPad" className="m-0 p-0 block"/>
            </button>
            <button style={{position: 'absolute', top: '682px', left: '847px'}}>
                <img src={ShareButton} alt="ShareButton" className="m-0 p-0 block"/>
            </button>
            <button style={{position: 'absolute', top: '686px', left: '1055px'}}>
                <img src={OptionsButton} alt="OptionsButton" className="m-0 p-0 block"/>
            </button>
        </div>
    );
};

export default Gamepad;