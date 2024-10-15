import Header from './Header';
import GameList from './GameList';
import PlayButton from './PlayButton';

const ConsoleScreen = () => {
    return (
        <div className="console-screen">
            <Header />
            <GameList />
            <PlayButton />
        </div>
    );
};

export default ConsoleScreen;
