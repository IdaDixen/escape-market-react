import { useEffect, useState } from 'react'
import './App.css'
import GameList from './components/GameList.jsx'
import { getGames } from './services/games.js'


function Welcome(props) {
  return (
    <p>Velkommen, {props.name}!</p>
  )
}


function App() {

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
      <section>
        <div>
          <h1>Escape Market</h1>
          <p>
            Unlock new adventures! Køb, sælg eller byt brugte escape room spil.
          </p>
        </div>
      </section>
      <Welcome name="Ida" />

      <GameList games={games} />


    </>
  )
}

export default App
