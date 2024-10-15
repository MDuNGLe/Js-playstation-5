import background from "../assets/background.png";
import playstation from "../assets/Playstation.png";
import dualshock from "../assets/dualshock.png";
import ConsoleScreen from "../components/ConsoleScreen.jsx";

export const MainPage = () => {


    return (
        <div className="relative">
            <img src={background} alt="backgrond" className="relative"/>
            <img src={playstation} alt="console" className="absolute top-[390px] left-[400px]"/>
            <img src={dualshock} alt="dualshock" className="absolute top-[560px] left-[610px]"/>
            <ConsoleScreen/>
        </div>
    );

};