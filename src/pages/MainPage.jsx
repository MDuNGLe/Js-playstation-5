import React, { useState } from "react";
import background from "../assets/background.png";
import dualshock from "../assets/dualshock.png";
import ConsoleScreen from "../components/ConsoleScreen.jsx";
import Gamepad from '../components/Gamepad.jsx';
import Playstation from "../components/Console.jsx";

export const MainPage = () => {
    const [screenOn, setScreenOn] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("start"); // Устанавливаем стартовый экран

    const toggleScreen = () => {
        setScreenOn(prev => !prev);
        if (!screenOn) {
            setCurrentScreen("start"); // Если экран включается, переключаем на старт
        }
    };

    const handlePSButtonClick = () => {
        if (currentScreen === "start") {
            setCurrentScreen("mainMenu"); // Переходит на главное меню при нажатии PS
        } else {
            // Здесь можно добавить логику для других экранов, если нужно
        }
    };

    return (
        <div className="relative">
            <img src={background} alt="background" className="relative"/>
            <img src={dualshock} alt="dualshock" className="absolute top-[560px] left-[610px]"/>
            <div>
                <Playstation toggleScreen={toggleScreen} screenOn={screenOn} />
                <ConsoleScreen isScreenOn={screenOn} currentScreen={currentScreen} />
                {screenOn && <Gamepad onPSButtonClick={handlePSButtonClick} />}
            </div>
        </div>
    );

};
