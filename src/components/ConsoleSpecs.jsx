import React from "react";

const ConsoleSpecs = ({ goToMainMenu }) => {
    const specs = {
        processor: '8-ядерный AMD Zen 2',
        graphics: 'AMD RDNA 2',
        memory: '16 ГБ GDDR6',
        storage: '825 ГБ SSD',
    };

    return (
        <div className="text-white text-center">
            <h1>Характеристики консоли</h1>
            <ul>
                <li><strong>Процессор:</strong> {specs.processor}</li>
                <li><strong>Графика:</strong> {specs.graphics}</li>
                <li><strong>Оперативная память:</strong> {specs.memory}</li>
                <li><strong>Хранилище:</strong> {specs.storage}</li>
            </ul>
            <button onClick={goToMainMenu}>Назад в главное меню</button>
        </div>
    );
};

export default ConsoleSpecs;
