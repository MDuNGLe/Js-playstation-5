import React, { useEffect, useState } from "react";
import StartScreen from './StartScreen.jsx';
import MainMenu from './MainMenu.jsx';
import GameList from './GameList.jsx';
import Profile from './Profile.jsx';
import ConsoleSpecs from './ConsoleSpecs.jsx';
import Header from './Header.jsx';
import '../index.css';
import bg from "../assets/ps-bg.png";
import Gamepad from "./Gamepad.jsx";

const ConsoleScreen = ({ isScreenOn, toggleScreen }) => {
    const [currentScreen, setCurrentScreen] = useState("start"); // Начальное состояние - стартовый экран

    useEffect(() => {
        // При включении консоли сбрасываем экран на стартовый
        if (isScreenOn) {
            setCurrentScreen("start");
        }
    }, [isScreenOn]); // Зависимость от состояния isScreenOn

    const renderScreen = () => {
        switch (currentScreen) {
            case "start":
                return <StartScreen goToMainMenu={() => setCurrentScreen("mainMenu")} />;
            case "mainMenu":
                return <MainMenu
                    goToGameList={() => setCurrentScreen("gameList")}
                    goToProfile={() => setCurrentScreen("profile")}
                    goToSpecs={() => setCurrentScreen("consoleSpecs")} />;
            case "gameList":
                return <GameList goToMainMenu={() => setCurrentScreen("mainMenu")} />;
            case "profile":
                return <Profile goToMainMenu={() => setCurrentScreen("mainMenu")} />;
            case "consoleSpecs":
                return <ConsoleSpecs goToMainMenu={() => setCurrentScreen("mainMenu")} />;
            default:
                return <StartScreen goToMainMenu={() => setCurrentScreen("mainMenu")} />;
        }
    };

    return (
        <div
            className={`console-screen absolute ${isScreenOn ? 'bg-green-500' : 'bg-black'} w-[820px] h-[464px] overflow-hidden border-4 border-black rounded-[5px] top-[128px] left-[545px]`}
            style={{
                backgroundImage: isScreenOn ? `url(${bg})` : 'none', // Устанавливаем фон
                backgroundSize: 'cover', // Убедитесь, что фон охватывает весь элемент
                backgroundPosition: 'center', // Центрирование фонового изображения
                backgroundRepeat: 'no-repeat' // Избегание повторения фонового изображения
            }}
        >

            {isScreenOn ? renderScreen() : <p className="text-center text-white">Экран выключен</p>}
        </div>
    );
};

export default ConsoleScreen;
