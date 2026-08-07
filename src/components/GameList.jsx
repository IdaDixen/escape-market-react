import GameCard from './GameCard.jsx'

function GameList({ games = [] }) {
    const listGames = games.map(game =>
        <GameCard key={game.id} game={game} />
    );
    return (
        <div className='game-list'>
            {listGames}
        </div>
    );
}

export default GameList