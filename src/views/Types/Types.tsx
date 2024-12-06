import TypeCard from '../../components/TypeCard/TypeCard';
import useGetTypes from '../../hooks/useGetTypes';
import { Type } from '../../Types/pokemonsTypes';
import './Types.scss';

export default function Types() {

    const { types, isLoading } = useGetTypes();

    if (isLoading) {
        return <p>Retrieving types...</p>
    }

    return (
        <>
            <section className="types">
                <h1 className="types-title">Types list</h1>
                <div className="types-list">
                    {types.map((type: Type) => {
                        return <TypeCard key={type.name} type={type} />
                    })}
                </div>
            </section>
        </>
    )
}
