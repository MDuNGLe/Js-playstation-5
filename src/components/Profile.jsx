import React from "react";

const Profile = ({ goToMainMenu }) => {
    const userProfile = {
        username: 'Игрок123',
        email: 'igrok123@example.com',
        favoriteGame: 'Игра 1',
    };

    return (
        <div className="text-white text-center">
            <h1>Профиль пользователя</h1>
            <p><strong>Имя пользователя:</strong> {userProfile.username}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <p><strong>Любимая игра:</strong> {userProfile.favoriteGame}</p>
            <button onClick={goToMainMenu}>Назад в главное меню</button>
        </div>
    );
};

export default Profile;
