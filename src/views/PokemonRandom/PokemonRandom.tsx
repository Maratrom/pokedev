import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useGetPokemonRandom from '../../hooks/useGetPokemonRandom';
import './PokemonRandom.scss';

export default function PokemonRandom() {

    const { pokemon, isLoading } = useGetPokemonRandom();

    if (isLoading) {
        return <p>Retrieving a random Pokemon...</p>
    }

    if (!pokemon) {
        return <p>Can't retieve a random pokemon wtf</p>
    }

    return (
        <>
            <section className="random-pokemon">
                <h1>Your random Pokemon is :</h1>
                <PokemonCard key={pokemon.pokedexId} pokemon={pokemon} simple={false} />
            </section>
        </>
    )
}
