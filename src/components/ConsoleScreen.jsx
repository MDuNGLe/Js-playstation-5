import React, { useEffect, useState } from "react";
import StartScreen from './StartScreen.jsx';
import MainMenu from './MainMenu.jsx';
import GameList from './GameList.jsx';
import Profile from './Profile.jsx';
import ConsoleSpecs from './ConsoleSpecs.jsx';
import bg from "../assets/ps-bg.png";


const ConsoleScreen = ({ isScreenOn, currentScreen }) => {
    const renderScreen = () => {
        switch (currentScreen) {
            case "start":
                return <StartScreen />;
            case "mainMenu":
                return (
                    <MainMenu
                        goToGameList={() => setCurrentScreen("gameList")}
                        goToProfile={() => setCurrentScreen("profile")}
                        goToSpecs={() => setCurrentScreen("consoleSpecs")}
                    />
                );
            case "gameList":
                return <GameList goToMainMenu={() => setCurrentScreen("mainMenu")} />;
            case "profile":
                return <Profile goToMainMenu={() => setCurrentScreen("mainMenu")} />;
            case "consoleSpecs":
                return <ConsoleSpecs goToMainMenu={() => setCurrentScreen("mainMenu")} />;
            default:
                return null;
        }
    };

    return (
        <div
            className={`console-screen absolute ${isScreenOn ? 'bg-green-500' : 'bg-black'} w-[820px] h-[464px] overflow-hidden border-4 border-black rounded-[5px] top-[128px] left-[545px]`}
            style={{
                backgroundImage: isScreenOn ? `url(${bg})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {isScreenOn ? renderScreen() : <p className="text-center text-white">Экран выключен</p>}
        </div>
    );
};

export default ConsoleScreen;
