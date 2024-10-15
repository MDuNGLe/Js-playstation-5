import GameItem from './GameItem';

const GameList = ({ games }) => {
    return (
        <div className="game-list">
            <div className="game-items">
                {games.map((game, index) => (
                    <GameItem key={index} game={game} />
                ))}
            </div>
            <div className="game-details">
                <h2 className="game-title">SPIDER-MAN</h2>
                <button className="play-button">Play Game</button>
            </div>
        </div>
    );
};

export default GameList;
