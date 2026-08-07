import { useEffect, useState } from 'react'
import './App.css'
import GameList from './GameList.jsx'
import { supabase } from './supabaseClient.js'

function Welcome(props) {
  return (
    <p>Velkommen, {props.name}!</p>
  )
}


function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getGames() {
      const { data, error } = await supabase
        .from("games")
        .select("*")
      
      if (error) {
        console.error(error)
        return
      }

      setGames(data)
    }

    getGames()
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
