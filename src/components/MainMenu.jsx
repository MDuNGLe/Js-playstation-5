
import React from "react";
import gamepadIcon from "../assets/gamepad.svg"; // Иконка геймпада
import menuIcon from "../assets/menu.svg";       // Иконка меню
import settingsIcon from "../assets/setting.svg";  // Иконка настроек
import profileIcon from "../assets/profile.svg";    // Иконка профиля

const MainMenu = ({ goToGameList, goToProfile, goToConsoleSpecs, goToReview }) => {
    return (

        <div className="text-white absolute top-[10px] left-[590px]">
            <div className="flex space-x-6">
                <button onClick={goToGameList}>
                    <img src={gamepadIcon} alt="Game List" className="w-8 h-8" />
                </button>
                <button onClick={goToProfile}>
                    <img src={profileIcon} alt="Profile" className="w-8 h-8" />
                </button>
                <button onClick={goToConsoleSpecs}>
                    <img src={settingsIcon} alt="Console Specs" className="w-8 h-8" />
                </button>
                <button onClick={goToReview}>
                    <img src={menuIcon} alt="Review" className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default MainMenu;
