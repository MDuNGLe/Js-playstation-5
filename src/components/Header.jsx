import React, {useState} from "react";
import GameIcon from '../assets/gamepad.svg';
import MenuIcon from '../assets/menu.svg';
import SettingIcon from '../assets/setting.svg';
import ProfileIcon from '../assets/profile.svg';
import Gamepad from './Gamepad.jsx';

const Header = ({goToGameList, goToProfile, goToSpecs}) => {
    const [activeIndex, setActiveIndex] = useState(0); // Индекс активного пункта меню

    // Массив пунктов меню с иконками и соответствующими действиями
    const menuItems = [
        {
            icon: GameIcon, action: () => {
                setActiveIndex(0);
                goToGameList();
            }
        },
        {
            icon: MenuIcon, action: () => {
                setActiveIndex(1);
                goToGameList();
            }
        }, // Здесь можно заменить на другую функцию, если нужно
        {
            icon: SettingIcon, action: () => {
                setActiveIndex(2);
                goToProfile();
            }
        },
        {
            icon: ProfileIcon, action: () => {
                setActiveIndex(3);
                goToSpecs();
            }
        }
    ];

    // Обработчик нажатий стрелок
    const handleArrowPress = (direction) => {
        setActiveIndex((prevIndex) => {
            const newIndex = direction === 'left'
                ? (prevIndex - 1 + menuItems.length) % menuItems.length
                : (prevIndex + 1) % menuItems.length; // Переход вправо

            menuItems[newIndex].action(); // Выполняем действие для нового активного пункта меню
            return newIndex; // Обновляем индекс активного пункта
        });
    };

    // Обработчик нажатия на кнопку "Enter"
    const handleEnterPress = () => {
        menuItems[activeIndex].action(); // Выполняем действие для активного пункта меню
    };

    // Обработчик нажатия на кнопку PS
    const handlePSButtonClick = () => {
        console.log("PS Button clicked!"); // Логика для кнопки PS (можно дополнить)
    };

    return (
        <header className="text-white text-center">
            <div className="flex justify-end">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`m-4 p-2 cursor-pointer ${activeIndex === index ? 'border-2 border-blue-500' : ''}`}
                        onClick={item.action} // Обработчик нажатия на иконку
                    >
                        <img
                            src={item.icon}
                            alt={`Menu Item ${index}`} // Альтернативный текст для иконок
                            className="w-10 h-10"
                            style={{
                                filter: activeIndex === index ? "brightness(1.5)" : "brightness(1)", // Изменение яркости для активного пункта
                                transition: "filter 0.2s", // Плавный переход
                            }}
                        />
                    </div>
                ))}
            </div>
            <Gamepad
                onArrowPress={handleArrowPress} // Передача обработчика нажатий стрелок
                onEnterPress={handleEnterPress} // Передача обработчика нажатия Enter
                onPSButtonClick={handlePSButtonClick} // Передача обработчика для кнопки PS
                activeMenuIndex={activeIndex} // Передача активного индекса меню
                menuScreens={menuItems.map(item => item.icon)} // Передача иконок в Gamepad
            />
        </header>
    );
};

export default Header;
