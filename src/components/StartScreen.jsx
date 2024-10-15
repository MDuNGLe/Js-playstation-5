// import bg from "../assets/ps-bg.png";
//
// const StartScreen = () => {
//
//     return ()
// }

import bg from '../assets/ps-bg.png'; // Импорт фона
import psIcon from '../assets/ps-icon.png'; // Импорт иконки

const StartScreen = () => {
    return (
        <div
            className="relative h-screen w-full flex items-center justify-center bg-black"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} // Устанавливаем фон
        >

            <div className="absolute top-1/3 text-center text-white">
                <p className="text-xl mb-8">
                    Нажмите кнопку PS на вашем контроллере
                </p>
            </div>


            <div className="relative">
                <img
                    src={psIcon} // Замени путь на свою иконку
                    alt="PS Button"
                    className="w-24 h-24" // Размер иконки можно подкорректировать
                />
            </div>
        </div>
    );
};

export default StartScreen;
