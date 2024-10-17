import React, { useState } from "react";
import background from "../assets/background.png";
import dualshock from "../assets/dualshock.png";
import ConsoleScreen from "../components/ConsoleScreen.jsx";
import Gamepad from '../components/Gamepad.jsx';
import Playstation from "../components/Console.jsx";

export const MainPage = () => {
    const [screenOn, setScreenOn] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("start");
    const menuScreens = ["mainMenu", "gameList", "profile", "specs"]; // Список экранов меню
    const [activeMenuIndex, setActiveMenuIndex] = useState(0); // Индекс активного элемента меню

    const toggleScreen = () => {
        setScreenOn(prev => !prev);
        if (!screenOn) {
            setCurrentScreen("start");
        }
    };

    const handlePSButtonClick = () => {
        if (currentScreen === "start") {
            setCurrentScreen("mainMenu");
        } else {
            console.log("PS Button clicked");
        }
    };

    const handleArrowPress = (direction) => {
        if (currentScreen === "mainMenu") {
            if (direction === "left") {
                setActiveMenuIndex((prevIndex) => (prevIndex - 1 + menuScreens.length) % menuScreens.length);
            } else if (direction === "right") {
                setActiveMenuIndex((prevIndex) => (prevIndex + 1) % menuScreens.length);
            }
        }
    };

    const handleEnterPress = () => {
        if (currentScreen === "mainMenu") {
            setCurrentScreen(menuScreens[activeMenuIndex]); // Переключение на выбранный пункт меню
        }
    };

    return (
        <div className="relative">
            <img src={background} alt="background" className="relative" />
            <img src={dualshock} alt="dualshock" className="absolute top-[560px] left-[610px]" />
            <div>
                <Playstation toggleScreen={toggleScreen} screenOn={screenOn} />
                <ConsoleScreen isScreenOn={screenOn} currentScreen={currentScreen} />
                {screenOn && (
                    <Gamepad
                        onArrowPress={handleArrowPress}
                        onEnterPress={handleEnterPress}
                        onPSButtonClick={handlePSButtonClick}
                        activeMenuIndex={activeMenuIndex} // Передача активного индекса меню
                        menuScreens={menuScreens} // Передача списка экранов меню
                    />
                )}
            </div>
        </div>
    );
};
