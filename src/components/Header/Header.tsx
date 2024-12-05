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
                            <Link to='/'><img src={logo} className='logo'/></Link>
                        </li>
                        <li>
                            <Link to='/fight'>Fight</Link>
                        </li>
                        <li>
                            <Link to='/pokemon-random'>Random Pokemon</Link>
                        </li>
                        <li>
                            <Link to='/pokemons'>All Pokemons</Link>
                        </li>
                        <li>
                            <Link to='/pokemons-for-type'>Pokemons for specific type</Link>
                        </li>
                        <li>
                            <Link to='/types'>Pokemon Types</Link>
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
