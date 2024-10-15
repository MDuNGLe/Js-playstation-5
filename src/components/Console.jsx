import PS from '../assets/Playstation.png';
import React, {useState} from "react";

const Playstation = () => {
    const [screenOn, setScreenOn] = useState(false); // Состояние для экрана

    // Функция для переключения состояния экрана
    const toggleScreen = () => {
        setScreenOn(prev => !prev); // Переключаем состояние
        console.log(`Экран ${!screenOn ? "включён" : "выключен"}`); // Сообщение в консоль
    };

    return (
        <div>
            {/* Отображаем состояние экрана */}
            <p className="text-center mb-4">{screenOn ? 'Экран включен' : 'Экран выключен'}</p>

            <button style={{position: 'absolute', top: '390px', left: '400px'}} onClick={toggleScreen} // Добавляем обработчик события
            >
                <img src={PS} alt="Playstation" className="m-0 p-0 block"/>
            </button>
        </div>
    );
};
export default Playstation;