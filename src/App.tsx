import { Route, Routes } from 'react-router-dom'
import './App.css'
import Fight from './views/Fight/Fight'
import Home from './views/Home/Home'
import PokemonRandom from './views/PokemonRandom/PokemonRandom'
import Pokemons from './views/Pokemons/Pokemons'
import PokemonsForType from './views/PokemonsForType/PokemonsForTyp'
import PokemonsSearchResult from './views/PokemonsSearchResult/PokemonsSearchResult'
import Types from './views/Types/Types'
import Header from './components/Header/Header'

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/fight' element={<Fight />}></Route>
        <Route path='/pokemon-random' element={<PokemonRandom />}></Route>
        <Route path='/pokemons' element={<Pokemons />}></Route>
        <Route path='/pokemons-for-type' element={<PokemonsForType />}></Route>
        <Route path='/pokemons-search-result' element={<PokemonsSearchResult />}></Route>
        <Route path='/types' element={<Types />}></Route>
      </Routes>
    </>
  )
}
