import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav className="navigation">
            <Link to="/">Forside</Link>
            <Link to="/buy">Køb brugte spil</Link>
            <Link to="/sell">Sælg</Link>
            <Link to="/trade">Byttecentralen</Link>
            <Link to="/about">Om</Link>
        </nav>
    )
}

export default Navigation

