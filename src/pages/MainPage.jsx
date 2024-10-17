import background from "../assets/background.png";
import playstation from "../assets/Playstation.png";
import dualshock from "../assets/dualshock.png";
import ConsoleScreen from "../components/ConsoleScreen.jsx";
import Gamepad from '../components/Gamepad.jsx';

export const MainPage = () => {

    return (
        <div className="MainPage">
            <img src={background} alt="backgrond" className=" "/>
            <img src={playstation} alt="console" className="absolute top-[390px] left-[400px]"/>
            <img src={dualshock} alt="dualshock" className="absolute top-[560px] left-[610px]"/>

            <div className="components ">
                <ConsoleScreen />
                <Gamepad/>
            </div>


        </div>
    );

};