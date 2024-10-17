// import bg from '../assets/ps-bg.png';
import React from "react";
import psIcon from '../assets/ps-icon.png';

const StartScreen = ({ onPSButtonClick }) => {
    return (
        <div className="absolute top-[110px] left-[150px] justify-items-center">

            <div className="text-center text-white ">
                <p className="text-2xl mb-8">
                    Нажмите кнопку PS на вашем контроллере
                </p>

                <img src={psIcon} alt="PS Button" className="w-24 h-24 absolute top-[100px] right-[173px]"/>
            </div>
        </div>
    );
};

export default StartScreen;
