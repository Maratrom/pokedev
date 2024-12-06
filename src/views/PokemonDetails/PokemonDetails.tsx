import { useParams } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import './PokemonDetails.scss';
import { Pokemon } from '../../Types/pokemonsTypes';
import useGetPokemonById from '../../hooks/useGetPokemonById';

export default function PokemonDetails() {

    const { id } = useParams();
    const { pokemon, isLoading } = useGetPokemonById(Number(id));

    if (isLoading) {
        return <p>Retrieving pokemon n°{id}...</p>
    }

    if (!isLoading && pokemon === null) {
        return <p>Can't find pokemon n°{id}...</p>
    }

    return (
        <>
            <PokemonCard key={pokemon!.pokedexId} pokemon={pokemon!} simple={false} />
        </>
    )
}
