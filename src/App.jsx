import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import HomePage from './pages/Home.jsx'
import BuyPage from './pages/BuyGames.jsx'
import SellPage from './pages/SellGame.jsx'
import TradePage from './pages/TradeCenter.jsx'
import AboutPage from './pages/About.jsx'


function App() {
  return (
    <>
      <Header />
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/buy' element={<BuyPage />} />
        <Route path='/sell' element={<SellPage />} />
        <Route path='/trade' element={<TradePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App