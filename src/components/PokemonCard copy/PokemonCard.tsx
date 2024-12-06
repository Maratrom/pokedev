import { Link } from 'react-router-dom';
import { Pokemon, Type } from '../../Types/pokemonsTypes';
import './PokemonCard.scss';

export default function PokemonCard({ pokemon, simple }: { pokemon: Pokemon, simple: boolean }) {

    function handlePokemonClick(event: any) {
        if (!simple) {
            event.preventDefault();
        }
    }

    return (
        <>
            <div className="pokemon">
                <h2 className="pokemon-identification"><p className='pokemon-identification-name'>{pokemon.name}</p><p className="pokemon-identification-id">n°{pokemon.pokedexId}</p></h2>
                <Link to={`/pokemon/${pokemon.pokedexId}`} onClick={(event) => handlePokemonClick(event)}><img src={pokemon.image} className='pokemon-image' /></Link>
                <div className="pokemon-types">
                    {pokemon.types.map((type: Type) => {
                        return (
                            <img src={type.image} className='pokemon-types-image' />
                        )
                    })}
                </div>
                {!simple && <>
                    <div className="pokemon-stats">
                        <p className="pokemon-stats-hp">Health : <span>{pokemon.stats.hp}</span></p>
                        <p className="pokemon-stats-attack">Attack : <span>{pokemon.stats.attack}</span></p>
                        <p className="pokemon-stats-defence">Defence : <span>{pokemon.stats.defence}</span></p>
                        <p className="pokemon-stats-special-attack">Special Attack : <span>{pokemon.stats.specialAttack}</span></p>
                        <p className="pokemon-stats-sepcial-defence">Special Defence : <span>{pokemon.stats.specialDefence}</span></p>
                        <p className="pokemon-stats-speed">Speed : <span>{pokemon.stats.speed}</span></p>
                    </div>
                    <div className="pokemon-evolutions"></div>
                </>}
            </div>
        </>
    )
}