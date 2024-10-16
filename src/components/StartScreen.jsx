import React from "react";

const StartScreen = ({ goToMainMenu }) => {
    return (
        <div className="text-white text-center">
            <h1>Добро пожаловать!</h1>
            <button onClick={goToMainMenu}>Войти в главное меню</button>
        </div>
    );
};

export default StartScreen;
