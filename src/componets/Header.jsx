import gamepad from "../assets/gamepad.svg";
import menu from "../assets/menu.svg";
import customize from "../assets/settings.svg";
import profile from "../assets/profile.svg";


const Header = () => {
    return (
        <header className="header">
            <h1>SPIDER-MAN</h1>
            <div className="header-icons">
                <img src={gamepad} alt="gamepad"/>
                <img src={menu} alt="menu"/>
                <img src={customize} alt="settings"/>
                <img src={profile} alt="profile"/>
            </div>
        </header>
    );
};

export default Header;