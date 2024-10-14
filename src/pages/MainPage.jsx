import background from "../assets/backgrond.png";
import playstation from "../assets/Playstation.png";

export const MainPage = () => {
    return (
        <div className="w-screen relative">
            <img src={background} alt="backgrond" className="w-full relative"/>
            <img src={playstation} alt="" className="absolute top-0 left-20"/>
        </div>
    );

};