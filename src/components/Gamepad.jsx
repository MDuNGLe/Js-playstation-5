import React, { useState } from 'react';
import ArrowUp from '../assets/up-arrow.svg';
import ArrowDown from '../assets/down-arrow.svg';
import ArrowLeft from '../assets/left-arrow.svg';
import ArrowRight from '../assets/right-arrow.svg';
import PSButton from '../assets/psButton.svg';
import Header from './Header'; // Импортируем Header

const Gamepad = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Индекс активного пункта меню

    const handleArrowPress = (direction) => {
        if (direction === 'left') {
            setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 3));
        } else if (direction === 'right') {
            setActiveIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 0));
        }
    };

    return (
        <div>
            <Header activeIndex={activeIndex} /> {/* Передаем активный пункт в Header */}

            {/* Стрелочки */}
            <button
                style={{ position: 'absolute', top: '733px', left: '785px' }}
                onClick={() => handleArrowPress('left')}
            >
                <img src={ArrowLeft} alt="Arrow Left" className="m-0 p-0 block" />
            </button>
            <button
                style={{ position: 'absolute', top: '733px', left: '827px' }}
                onClick={() => handleArrowPress('right')}
            >
                <img src={ArrowRight} alt="Arrow Right" className="m-0 p-0 block" />
            </button>

            {/* Остальные кнопки */}
            <button style={{ position: 'absolute', top: '788px', left: '945px' }}>
                <img src={PSButton} alt="PSButton" className="m-0 p-0 block" />
            </button>
        </div>
    );
};

export default Gamepad;
