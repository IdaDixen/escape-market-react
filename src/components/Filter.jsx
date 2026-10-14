import { useState } from "react";

function filterGames(games, onFilter) {
    const [searchFilter, setSearchFilter] = useState("")
    const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchFilter.toLowerCase()))
    return(filterGames)
}

export default filterGames