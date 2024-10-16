import PropTypes from 'prop-types';
import gamepad from "../assets/gamepad.svg";
import menu from "../assets/menu.svg";
import setting from "../assets/setting.svg";
import profile from "../assets/profile.svg";

const Header = ({ activeIndex }) => {
    const icons = [gamepad, menu, setting, profile];
    const iconLabels = ['Gamepad', 'Menu', 'Setting', 'Profile'];
    return (
        <header className="absolute top-[130px] left-[510px]">
            <div className="container flex mw-[820px]">
                <div className="header-icons">
                    {icons.map((icon, index) => (
                        <img
                            key={index}
                            src={icon}
                            alt={iconLabels[index]}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
