import GameCard from './GameCard.jsx'

function GameList({ games }) {
    const listGames = games.map(game =>
            <GameCard key={game.title} game={game} />
    );
    return <ul>{listGames}</ul>
}

export default GameList