import PropTypes from 'prop-types';
import gamepad from "../assets/gamepad.svg";
import menu from "../assets/menu.svg";
import setting from "../assets/setting.svg";
import profile from "../assets/profile.svg";
import bg from "../assets/ps-bg.png";

const Header = ({ activeIndex }) => {
    const icons = [gamepad, menu, setting, profile];
    const iconLabels = ['Gamepad', 'Menu', 'Setting', 'Profile'];

    return (
        <header className="header absolute top-[130px] left-[550px]">
            <div className="container">

                <h1>{iconLabels[activeIndex]}</h1> {/* Название активного пункта */}
                <div className="header-icons">
                    {icons.map((icon, index) => (
                        <img
                            key={index}
                            src={icon}
                            alt={iconLabels[index]}
                            style={{
                                width: activeIndex === index ? '80px' : '50px', // Увеличение активной иконки
                                transition: 'width 0.3s ease', // Плавное увеличение
                            }}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
