import './PokemonsSearchResult.scss';
import useGetPokemons from '../../hooks/useGetPokemons';
import { useSearchParams } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { Pokemon } from '../../Types/pokemonsTypes';

export default function PokemonsSearchResult() {
    const { pokemons, isLoading } = useGetPokemons();

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    if (isLoading) {
        return <p>Retrieving pokemons...</p>
    }

    return (
        <>
            <div className="pokemons">
                {
                    pokemons.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().includes(query!.toLowerCase())).map((pokemon) => {
                        return (<PokemonCard key={pokemon.pokedexId} pokemon={pokemon} simple={true} />)
                    })
                }
            </div>
        </>
    )
}
