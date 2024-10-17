
import React from "react";
import MainMenu from './MainMenu';
import StartScreen from './StartScreen';
import GameList from './GameList';
import Profile from './Profile';
import ConsoleSpecs from './ConsoleSpecs';
import Review from './Review';
import bg from "../assets/ps-bg.png";

const ConsoleScreen = ({ isScreenOn, currentScreen, goToGameList, goToProfile, goToConsoleSpecs, goToReview }) => {
    const renderScreen = () => {
        switch (currentScreen) {
            case "start":
                return <StartScreen />;
            case "mainMenu":
                return (
                    <MainMenu
                        goToGameList={goToGameList}
                        goToProfile={goToProfile}
                        goToConsoleSpecs={goToConsoleSpecs}
                        goToReview={goToReview}
                    />
                );
            case "gameList":
                return <GameList goToMainMenu={() => setCurrentScreen("mainMenu")} />;
            case "profile":
                return <Profile goToMainMenu={() => setCurrentScreen("mainMenu")} />;
            case "consoleSpecs":
                return <ConsoleSpecs goToMainMenu={() => setCurrentScreen("mainMenu")} />;
            case "review":
                return <Review goToMainMenu={() => setCurrentScreen("mainMenu")} />;
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
            {/* Иконки для навигации */}
            <MainMenu
                goToGameList={goToGameList}
                goToProfile={goToProfile}
                goToConsoleSpecs={goToConsoleSpecs}
                goToReview={goToReview}
            />
            {/* Основной экран */}
            {isScreenOn ? renderScreen() : <p className="text-center text-white">Экран выключен</p>}
        </div>
    );
};

export default ConsoleScreen;
