function GameCard({ game }) {
  return (
    <article className="game">
      <img src={`/${game.image_url}`} alt={game.title} />

      <h3>{game.title}</h3>

      <p>Sprog: {game.language}</p>
      <p>Stand: {game.condition}</p>
      <p>Antal gange spillet: {game.times_played}</p>

      <p className="price">{game.price} kr.</p>
    </article>
  );
}

export default GameCard;
