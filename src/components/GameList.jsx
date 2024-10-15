import GameItem from './GameItem';

const GameList = ({ games }) => {
    return (
        <div className="game-list">
            {games.map((game) => (
                <GameItem key={game.id} game={game} />
            ))}
        </div>
    );
};

export default GameList;
