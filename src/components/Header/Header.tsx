import { FormEvent, useState } from 'react';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/pokeball-logo.png'

export default function Header() {

    const [inputName, setInputName] = useState<String>("");

    const navigate = useNavigate()

    function handleSubmitForm(event: FormEvent) {
        event.preventDefault();
        const query: string = event.target.query.value;
        navigate(`/pokemons-search-result?query=${query}`);

    }

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'><img src={logo} className='logo' /></Link>
                        </li>
                        <li>
                            <Link to='/fight'><p>Fight</p></Link>
                        </li>
                        <li>
                            <Link to='/pokemon-random'><p>Random Pokemon</p></Link>
                        </li>
                        <li>
                            <Link to='/pokemons'><p>All Pokemons</p></Link>
                        </li>
                        <li>
                            <Link to='/pokemons-for-type'><p>Pokemons for specific type</p></Link>
                        </li>
                        <li>
                            <Link to='/types'><p>Pokemon Types</p></Link>
                        </li>
                    </ul>
                    <form method="GET" onSubmit={(event) => handleSubmitForm(event)}>
                        <label> Search :
                            <input type="search" placeholder="Pokemon Name" name="query" value={inputName} onChange={(event) => setInputName(event.target.value)} />
                        </label>
                        <input type="submit" disabled={!inputName} />
                    </form>

                </nav>
            </header>
        </>
    )
}
