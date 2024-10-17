import bg from '../assets/ps-bg.png';
import React from "react";
import psIcon from '../assets/ps-icon.png';

const StartScreen = ({ onPSButtonClick }) => {
    return (
        <div className="absolute top-[130px] left-[550px]">

            <div className="text-center text-white ">
                <p className="text-2xl mb-8 absolute top-[65px] right-[150px]">
                    Нажмите кнопку PS на вашем контроллере
                </p>
                <img
                    src={psIcon}
                    alt="PS Button"
                    className="w-24 h-24 absolute top-[195px] right-[373px]"
                    onClick={onPSButtonClick} // Передача функции при нажатии
                />
            </div>
        </div>
    );
};

export default StartScreen;
