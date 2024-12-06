import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useGetPokemons from '../../hooks/useGetPokemons';
import './Pokemons.scss';

export default function Pokemons() {

    const { pokemons, isLoading } = useGetPokemons();

    if (isLoading) {
        return <p>Retrieving pokemons...</p>
    }

    return (
        <>
            <div className="generations">
                {[...Array(pokemons[pokemons.length - 1].generation)].map((_, index: number) => {
                    return (
                        <section key={index} className="generation">
                            <h1>Generation {index + 1}</h1>
                            <div className="pokemons">
                                {
                                    pokemons.map((pokemon) => {
                                        return (pokemon.generation === index + 1 ? <PokemonCard key={pokemon.pokedexId} pokemon={pokemon} simple={true} /> : <></>)
                                    })
                                }
                            </div>
                        </section>
                    )
                })}
            </div>
        </>
    )
}
