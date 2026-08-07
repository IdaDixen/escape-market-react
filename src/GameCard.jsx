function GameCard({ game }) {
    return (
        <div>
            <h3>{game.title}</h3>
            <p>Sprog: {game.language}</p>
            <p>Stand: {game.condition}</p>
            <p>Antal gange spillet: {game.timesPlayed}</p>
            <p className="price">{game.price} kr.</p>
        </div>
    );
}

export default GameCard