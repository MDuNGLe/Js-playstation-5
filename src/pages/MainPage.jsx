import React, { useState } from "react";
import background from "../assets/background.png";
import dualshock from "../assets/dualshock.png";
import ConsoleScreen from "../components/ConsoleScreen.jsx";
import Gamepad from '../components/Gamepad.jsx';
import Playstation from "../components/Console.jsx";
import GameList from '../components/GameList.jsx'; // Импортируем компонент GameList

export const MainPage = () => {
    const [screenOn, setScreenOn] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("start");

    const toggleScreen = () => {
        setScreenOn(prev => !prev);
        if (!screenOn) {
            setCurrentScreen("start");
        }
    };

    const handlePSButtonClick = () => {
        if (currentScreen === "start") {
            setCurrentScreen("mainMenu");
        }
    };

    const goToGameList = () => {
        setCurrentScreen("gameList"); // Здесь мы меняем на экран библиотеки игр
    };

    const goToProfile = () => {
        setCurrentScreen("profile");
    };

    const goToSpecs = () => {
        setCurrentScreen("consoleSpecs");
    };

    return (
        <div className="relative">
            <img src={background} alt="background" className="relative" />
            <img src={dualshock} alt="dualshock" className="absolute top-[560px] left-[610px]" />
            <div>
                <Playstation toggleScreen={toggleScreen} screenOn={screenOn} />
                <ConsoleScreen
                    isScreenOn={screenOn}
                    currentScreen={currentScreen}
                    goToGameList={goToGameList} // Передаем функцию библиотека
                    goToProfile={goToProfile}
                    goToSpecs={goToSpecs}
                />
                {screenOn && <Gamepad onPSButtonClick={handlePSButtonClick} />}
            </div>
        </div>
    );
};
