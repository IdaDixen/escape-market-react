import { useEffect, useState } from 'react'
import GameList from '../components/GameList.jsx'
import { getGames } from '../services/games.js';


function BuyPage() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    async function loadGames() {
      const data = await getGames();
      setGames(data);
    }

    loadGames();
  }, [])

  return (
    <>
      <GameList games={games} />
    </>
  )
}

export default BuyPage