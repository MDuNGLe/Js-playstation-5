import background from "../assets/background.png";
import playstation from "../assets/Playstation.png";
import dualshock from "../assets/dualshock.png";
import Gamepad from '../components/Gamepad.jsx';

export const MainPage = () => {
    return (
        <div className="relative">
            <img src={background} alt="backgrond" className="relative"/>
            <img src={playstation} alt="" className="absolute top-[390px] left-[400px]"/>
            <img src={dualshock} alt="dualshock" className="absolute top-[560px] left-[610px]"/>
            <div>
                <Gamepad/>
            </div>
        </div>
    );

};