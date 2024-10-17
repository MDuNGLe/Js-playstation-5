import React from "react";
import image1 from "../assets/Ring1.png";
import image2 from "../assets/Ring2.png";
import image3 from "../assets/Ring3.png";
import image4 from "../assets/Ring4.png";

const Review = () => {
    return (
        <div className="text-white p-8 overflow-y-scroll h-[464px]">
            <h1 className="text-center text-2xl mb-6">За что игроки полюбили Elden Ring</h1>
            <div className="space-y-6">
                {/* Первый блок с изображением и текстом */}
                <div>
                    <img src={image1} alt="Elden Ring Scene 1" className="w-full h-auto mb-4 rounded"/>
                    <p>
                        Открытый мир, который интересно исследовать. Elden Ring впервые в истории FromSoftware отошла от линейных уровней. Указываете благодать и направляете игрока по сюжетному пути, но игрок практически не ограничен в выборе порядка прохождения. С самого начала игры доступно сразу несколько путей для исследования. Механика поиска ключевых моментов, их прохождение, их разгадка. В этом плане Elden Ring больше всего похожа на The Legend of Zelda: Breath of the Wild.
                    </p>
                </div>

                {/* Второй блок с изображением и текстом */}
                <div>
                    <img src={image2} alt="Elden Ring Scene 2" className="w-full h-auto mb-4 rounded"/>
                    <p>
                        Игровая карта невероятно бесконечна, исследование дает игрокам возможность исследовать любые уголки. При этом необязательных локаций здесь так много, что на исследование можно потратить столько же времени, сколько и занимают основные прохождения.
                    </p>
                </div>

                {/* Третий блок с изображением и текстом */}
                <div>
                    <img src={image3} alt="Elden Ring Scene 3" className="w-full h-auto mb-4 rounded"/>
                    <p>
                        Сложные боссы. Всего в Elden Ring 165 боссов, из которых только 12 – обязательные. Многие из них встречаются не только в обязательных локациях, но и прямо во время исследования открытого мира. Некоторые противники стали особенно популярны среди фанатов за их внешний дизайн и механику. Самый известный из таких — Маления, Клинок Микеллы.
                    </p>
                </div>

                {/* Четвертый блок с изображением и текстом */}
                <div>
                    <img src={image4} alt="Elden Ring Scene 4" className="w-full h-auto mb-4 rounded"/>
                    <p>
                        Много запоминающихся моментов. Во время игры вас не покинет чувство приключений. Каждая локация, будь то новые уникальные уровни, схватка с боссом или финальные сражения, оставляют след.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;
