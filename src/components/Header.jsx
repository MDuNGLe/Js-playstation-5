import bg from "../assets/ps-bg.png"
import gamepad from "../assets/gamepad.svg";
import menu from "../assets/menu.svg";
import setting from "../assets/setting.svg";
import profile from "../assets/profile.svg";
import '../index.css';


const Header = () => {
    return (
        <header className="header absolute top-[130px] left-[550px]">
            <div className="container">
                <img src={bg} alt=""/>
                <h1>SPIDER-MAN</h1>
                <div className="header-icons">
                    <img src={gamepad} alt="gamepad"/>
                    <img src={menu} alt="menu"/>
                    <img src={setting} alt="setting"/>
                    <img src={profile} alt="profile"/>
                </div>
            </div>
        </header>
    );
};

export default Header;