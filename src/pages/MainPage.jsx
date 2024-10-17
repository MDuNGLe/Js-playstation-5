import React, { useState } from 'react';
import background from "../assets/background.png";
import dualshock from "../assets/dualshock.png";
import ConsoleScreen from "../components/ConsoleScreen.jsx";
import Gamepad from '../components/Gamepad.jsx';
import Console from "../components/Console.jsx";
import StartScreen from "../components/StartScreen.jsx";
import Header from "../components/Header.jsx";

export const MainPage = () => {
    const [consoleOn, setConsoleOn] = useState(false);
    const [psButtonPressed, setPSButtonPressed] = useState(false);

    const handleToggleConsole = (isOn) => {
        setConsoleOn(isOn);
        if (!isOn) {
            setPSButtonPressed(false);  // Сброс при выключении консоли
        }
    }; //функция вklючениявыключения консоли

    const handlePSButtonClick = () => {
        setPSButtonPressed(true);
    };

    return (
        <div className="relative">
            <img src={background} alt="background" className="relative"/>
            <img src={dualshock} alt="dualshock" className="absolute top-[560px] left-[610px]"/>
            {consoleOn && !psButtonPressed && <StartScreen />}
            {consoleOn && psButtonPressed && (
                <>

                    <ConsoleScreen isScreenOn={consoleOn} onPSButtonPress={handlePSButtonClick} />
                </>
            )}
            <Gamepad onPSButtonClick={handlePSButtonClick} />
            <Console onToggleConsole={handleToggleConsole} /> изображение консоли
        </div>
    );
};
