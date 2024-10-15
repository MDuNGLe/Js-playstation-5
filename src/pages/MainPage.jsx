import background from "../assets/background.png";
import dualshock from "../assets/dualshock.png";
import ConsoleScreen from "../components/ConsoleScreen.jsx";
import Gamepad from '../components/Gamepad.jsx';
import Playstation from "../components/Console.jsx";

export const MainPage = () => {


    return (
        <div className="relative">
            <img src={background} alt="background" className="relative"/>
            <img src={dualshock} alt="dualshock" className="absolute top-[560px] left-[610px]"/>
            <div>
                <ConsoleScreen/>
                <Gamepad/>
                <Playstation />
            </div>
        </div>
    );

};