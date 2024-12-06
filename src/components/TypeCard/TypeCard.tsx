import { Type } from '../../Types/pokemonsTypes';
import './TypeCard.scss';
import { Link } from 'react-router-dom';

export default function TypeCard({ type }: { type: Type }) {

    return (
        <>
            <Link to={`/pokemons-for-type/${type.name}`} className='type-link'>
                <div className="type">
                    <img src={type.image} className='type-image' />
                    <p className='type-name'>{type.name}</p>
                </div>
            </Link>
        </>
    )
}