import React from "react";

const MainMenu = ({ goToProfile, goToSpecs, goToGameList }) => {
    return (
        <div className="text-white text-center">
            <h1>Главное меню</h1>
            <button onClick={goToGameList}>Список игр</button>
            <button onClick={goToProfile}>Профиль</button>
            <button onClick={goToSpecs}>Характеристики консоли</button>
            <button onClick={goToGameList}>Библиотека</button> {/* Добавлена кнопка */}
        </div>
    );
};

export default MainMenu;
