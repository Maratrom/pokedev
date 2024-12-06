import { useParams } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useGetPokemonsForType from '../../hooks/usGetPokemonsForType';
import './PokemonsForType.scss';

export default function PokemonsForType() {

    const { type } = useParams();

    const { pokemons, isLoading } = useGetPokemonsForType(type!);

    if (isLoading) {
        return <p>Retrieving pokemons with {type} type</p>
    }

    return (
        <>
            <h1>Pokemon with {type} <img src="type" alt="" />type :</h1>
            <div className="pokemons">
                {pokemons.map((pokemon) => {
                    return (<PokemonCard key={pokemon.pokedexId} pokemon={pokemon} simple={true} />)
                })}
            </div>
        </>
    )
}
