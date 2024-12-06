import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Fight from './views/Fight/Fight'
import Home from './views/Home/Home'
import PokemonDetails from './views/PokemonDetails/PokemonDetails'
import PokemonRandom from './views/PokemonRandom/PokemonRandom'
import Pokemons from './views/Pokemons/Pokemons'
import PokemonsForType from './views/PokemonsForType/PokemonsForType'
import PokemonsSearchResult from './views/PokemonsSearchResult/PokemonsSearchResult'
import Types from './views/Types/Types'

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fight' element={<Fight />} />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
        <Route path='/pokemon-random' element={<PokemonRandom />} />
        <Route path='/pokemons' element={<Pokemons />} />
        <Route path='/pokemons-for-type/:type' element={<PokemonsForType />} />
        <Route path='/pokemons-search-result' element={<PokemonsSearchResult />} />
        <Route path='/types' element={<Types />} />
      </Routes>
    </>
  )
}
