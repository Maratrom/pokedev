import { Link } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useGetRandomTeam from '../../hooks/useGetRandomTeam';
import { Pokemon, Type } from '../../Types/pokemonsTypes';
import './Home.scss';
import TypeCard from '../../components/TypeCard/TypeCard';
import useGetTypes from '../../hooks/useGetTypes';
import { useEffect, useState } from 'react';

export default function Home() {
    const { pokemons, isLoading: isLoadingPokemons } = useGetRandomTeam();
    const { types, isLoading: isLoadingTypes } = useGetTypes();

    const [randomTypes, setRandomTypes] = useState<Type[]>([]);

    useEffect(() => {
        setRandomTypes(types.sort(() => 0.5 - Math.random()).slice(0, 3));
    }, [types]);

    if (isLoadingPokemons) {
        return <p>Retrieving random team...</p>
    }

    return (
        <>
            {!isLoadingPokemons &&
                <section className='random-team'>
                    <Link to="/pokemons" className='section-link'><h1>Random team :</h1></Link>
                    <div className="pokemons">
                        {pokemons.map((pokemon: Pokemon) => {
                            return <PokemonCard key={pokemon.pokedexId} pokemon={pokemon} simple={true} />
                        })}
                    </div>
                </section>
            }
            {!isLoadingTypes &&
                <section className="random-types">
                    <Link to="/types" className='section-link'><h1>Random types :</h1></Link>
                    <div className="pokemons">
                        {randomTypes.map((type: Type) => {
                            return (
                                <Link to={`/pokemons-for-type/${type.name}`} className='type-link'>
                                    <TypeCard key={type.name} type={type} />
                                </Link >)
                        })}
                    </div>
                </section>
            }
        </>
    )
}
