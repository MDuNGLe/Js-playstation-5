//
// import React from "react";
// import User from '../data/User';
//
// const Profile = ({ goToMainMenu }) => {
//     // Создаем объект класса User
//     const user = new User('квадробер228', 'МаминаРадость@mail.ru', 'Мобильный', 'чмо ебаное', '0 нахуй бублик с дыркой', 'мама/папа', 'помойка', [
//         { isOnline: true, email: 'Мамина радость@mail.ru' },
//         { isOnline: true, email: 'Мамина радость@mail.ru' },
//         { isOnline: false, email: 'Мамина радость@mail.ru' },
//         { isOnline: false, email: 'Мамина радость@mail.ru' },
//         { isOnline: false, email: 'Мамина радость@mail.ru' },
//     ]);
//
//     // Получаем данные пользователя
//     const profile = user.getProfile();
//
//     return (
//         <div className="text-white p-8">
//             <h1 className="text-center text-2xl mb-6">Профиль</h1>
//             <div className="flex justify-center space-x-10">
//                 {/* Левая колонка - данные пользователя */}
//                 <div className="w-1/2 bg-gray-800 p-4 rounded">
//                     <p className="border-b border-gray-600 p-2"><strong>Ник:</strong> {profile.nickname}</p>
//                     <p className="border-b border-gray-600 p-2"><strong>Почта:</strong> {profile.email}</p>
//                     <p className="border-b border-gray-600 p-2"><strong>Телефон:</strong> {profile.phone}</p>
//                     <p className="border-b border-gray-600 p-2"><strong>ФИО:</strong> {profile.fullName}</p>
//                     <p className="border-b border-gray-600 p-2"><strong>Баланс:</strong> {profile.balance}</p>
//                     <p className="border-b border-gray-600 p-2"><strong>Карта оплаты:</strong> {profile.paymentCard}</p>
//                     <p className="border-b border-gray-600 p-2"><strong>Адрес:</strong> {profile.address}</p>
//                 </div>
//
//                 {/* Правая колонка - список друзей */}
//                 <div className="w-1/2 bg-gray-800 p-4 rounded">
//                     <h2 className="text-center mb-4">Друзья</h2>
//                     {profile.friends.map((friend, index) => (
//                         <p key={index} className={`border-b border-gray-600 p-2 ${friend.isOnline ? 'border-blue-500' : ''}`}>
//                             <strong>{friend.isOnline ? 'Онлайн' : 'Офлайн'}:</strong> {friend.email}
//                         </p>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Profile;
import React from "react";
import User from '../data/User';
import Friends from '../data/Friends';

const Profile = ({ goToMainMenu }) => {
    // Создаем объект класса User
    const user = new User('квадрокоптер228', 'МаминаРадость@mail.ru', 'Мобильный', 'ывлао зфцво фщыво', '0 бублик с дыркой', 'мама/папа', 'помойка');

    // Создаем объект класса Friends
    const friends = new Friends([
        { isOnline: true, email: 'сахарныйЧелове@mail.ru' },
        { isOnline: true, email: 'сахарноеМоре@mail.ru' },
        { isOnline: false, email: 'пупсик@mail.ru' },
        { isOnline: false, email: 'пикми@mail.ru' },
        { isOnline: false, email: 'найкПро@mail.ru' }
    ]);

    // Получаем данные пользователя и друзей
    const profile = user.getProfile();
    const friendsList = friends.getFriends();

    return (
        <div className="text-white p-8">
            <h1 className="text-center text-2xl mb-6">Профиль</h1>
            <div className="flex justify-center space-x-10">
                {/* Левая колонка - данные пользователя */}
                <div className="w-1/2 bg-gray-800 p-4 rounded">
                    <p className="border-b border-gray-600 p-2"><strong>Ник:</strong> {profile.nickname}</p>
                    <p className="border-b border-gray-600 p-2"><strong>Почта:</strong> {profile.email}</p>
                    <p className="border-b border-gray-600 p-2"><strong>Телефон:</strong> {profile.phone}</p>
                    <p className="border-b border-gray-600 p-2"><strong>ФИО:</strong> {profile.fullName}</p>
                    <p className="border-b border-gray-600 p-2"><strong>Баланс:</strong> ${profile.balance}</p>
                    <p className="border-b border-gray-600 p-2"><strong>Карта оплаты:</strong> {profile.paymentCard}</p>
                    <p className="border-b border-gray-600 p-2"><strong>Адрес:</strong> {profile.address}</p>
                </div>

                {/* Правая колонка - список друзей */}
                <div className="w-1/2 bg-gray-800 p-4 rounded">
                    <h2 className="text-center mb-4">Друзья</h2>
                    {friendsList.map((friend, index) => (
                        <p key={index} className={`border-b border-gray-600 p-2 ${friend.isOnline ? 'border-blue-500' : ''}`}>
                            <strong>{friend.isOnline ? 'Онлайн' : 'Офлайн'}:</strong> {friend.email}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
