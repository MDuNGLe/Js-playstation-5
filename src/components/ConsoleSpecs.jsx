// import React from "react";
//
// const ConsoleSpecs = ({ goToMainMenu }) => {
//     return (
//         <div className="text-white p-8">
//             <h1 className="text-center text-2xl mb-6">Консоль</h1>
//             <div className="flex justify-center space-x-10">
//                 {/* Колонка 1: Консоль */}
//                 <div className="w-1/3 bg-gray-800 p-4 rounded">
//                     <p className="border-b border-gray-600 p-2"><strong>Консоль:</strong> PS5</p>
//                     <p className="border-b border-gray-600 p-2"><strong>Гарантия:</strong> 30-06-2029</p>
//                     <p className="border-b border-gray-600 p-2"><strong>Порты:</strong> 6</p>
//                     <ul className="ml-4">
//                         <li>USB Type-C</li>
//                         <li>USB Type-A</li>
//                         <li>USB Type-A</li>
//                         <li>USB Type-A</li>
//                         <li>Порт Ethernet</li>
//                         <li>Порт HDMI</li>
//                     </ul>
//                 </div>
//
//                 {/* Колонка 2: Система */}
//                 <div className="w-1/3 bg-gray-800 p-4 rounded">
//                     <h2 className="text-center mb-4">Система</h2>
//                     <p className="border-b border-gray-600 p-2"><strong>fps:</strong> 23</p>
//                     <p className="border-b border-gray-600 p-2"><strong>isHDR:</strong> On</p>
//                     <p className="border-b border-gray-600 p-2"><strong>remote play:</strong> off</p>
//                     <p className="border-b border-gray-600 p-2"><strong>dolbyAtmos:</strong> on</p>
//                 </div>
//
//                 {/* Колонка 3: Настройки */}
//                 <div className="w-1/3 bg-gray-800 p-4 rounded">
//                     <h2 className="text-center mb-4">Настройки</h2>
//                     <p className="border-b border-gray-600 p-2"><strong>Сеть:</strong> Подключено</p>
//                     <p className="border-b border-gray-600 p-2"><strong>Память:</strong> 666ГБ</p>
//                     <p className="border-b border-gray-600 p-2"><strong>Уведомления:</strong> On</p>
//                     <p className="border-b border-gray-600 p-2"><strong>Контроллер:</strong> connectrd</p>
//                 </div>
//             </div>
//             {/* Кнопка назад */}
//             <div className="text-center mt-6">
//                 <button
//                     onClick={goToMainMenu}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Назад в главное меню
//                 </button>
//             </div>
//
//         </div>
//     );
// };
//
// export default ConsoleSpecs;
import React from "react";
import Console from '../data/Console';
import System from '../data/System';
import Menu from '../data/Menu';

const ConsoleSpecs = ({ goToMainMenu }) => {
    // Создаем объекты классов
    const console = new Console('PS5', '30-06-2029', ['USB Type-C', 'USB Type-A', 'USB Type-A', 'USB Type-A', 'Порт Ethernet', 'Порт HDMI']);
    const system = new System(23, 'On', 'Off', 'On');
    const menu = new Menu('Подключено', '666ГБ', 'On', 'Connected');

    // Получаем данные из классов
    const consoleSpecs = console.getConsoleSpecs();
    const systemSpecs = system.getSystemSpecs();
    const menuSpecs = menu.getMenuSpecs();

    return (
        <div className="text-white p-8">
            <h1 className="text-center text-2xl mb-6">Консоль</h1>
            <div className="flex justify-center space-x-10">
                {/* Колонка 1: Консоль */}
                <div className="w-1/3 bg-gray-800 p-4 rounded">
                    <p className="border-b border-gray-600 p-2"><strong>Консоль:</strong> {consoleSpecs.title}</p>
                    <p className="border-b border-gray-600 p-2"><strong>Гарантия:</strong> {consoleSpecs.warranty}</p>
                    <p className="border-b border-gray-600 p-2"><strong>Порты:</strong> {consoleSpecs.ports.length}</p>
                    <ul className="ml-4">
                        {consoleSpecs.ports.map((port, index) => (
                            <li key={index}>{port}</li>
                        ))}
                    </ul>
                </div>

                {/* Колонка 2: Система */}
                <div className="w-1/3 bg-gray-800 p-4 rounded">
                    <h2 className="text-center mb-4">Система</h2>
                    <p className="border-b border-gray-600 p-2"><strong>fps:</strong> {systemSpecs.fps}</p>
                    <p className="border-b border-gray-600 p-2"><strong>isHDR:</strong> {systemSpecs.isHDR}</p>
                    <p className="border-b border-gray-600 p-2"><strong>remote play:</strong> {systemSpecs.remotePlay}</p>
                    <p className="border-b border-gray-600 p-2"><strong>dolbyAtmos:</strong> {systemSpecs.dolbyAtmos}</p>
                </div>

                {/* Колонка 3: Настройки */}
                <div className="w-1/3 bg-gray-800 p-4 rounded">
                    <h2 className="text-center mb-4">Настройки</h2>
                    <p className="border-b border-gray-600 p-2"><strong>Сеть:</strong> {menuSpecs.networkStatus}</p>
                    <p className="border-b border-gray-600 p-2"><strong>Память:</strong> {menuSpecs.memory}</p>
                    <p className="border-b border-gray-600 p-2"><strong>Уведомления:</strong> {menuSpecs.notifications}</p>
                    <p className="border-b border-gray-600 p-2"><strong>Контроллер:</strong> {menuSpecs.controller}</p>
                </div>
            </div>
            {/* Кнопка назад */}
            <div className="text-center mt-6">
                <button
                    onClick={goToMainMenu}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Назад в главное меню
                </button>
            </div>

        </div>
    );
};

export default ConsoleSpecs;
