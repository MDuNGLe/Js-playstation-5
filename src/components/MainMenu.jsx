import React from 'react';
import Header from './Header';

const MainMenu = () => (
    <div className="main-menu">
        {/* Передача нужных функций в Header */}
        <Header
            goToGameList={() => console.log('Переход к списку игр')}
            goToProfile={() => console.log('Переход в профиль')}
            goToSpecs={() => console.log('Переход к характеристикам')}
        />
        <p>Здесь расположены ваши игры и настройки.</p>
    </div>
);

export default MainMenu;
