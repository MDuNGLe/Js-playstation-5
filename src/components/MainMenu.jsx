import React from "react";

const MainMenu = ({ goToGameList, goToProfile, goToSpecs }) => {
    return (
        <div className="text-white text-center">
            <h1>Главное меню</h1>
            <button onClick={goToGameList}>Список игр</button>
            <button onClick={goToProfile}>Профиль</button>
            <button onClick={goToSpecs}>Характеристики консоли</button>
        </div>
    );
};

export default MainMenu;
