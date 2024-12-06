import { useEffect, useState } from "react";
import { Pokemon } from "../Types/pokemonsTypes";
import { getRandomTeam } from "../Repository/pokemonsRepository";

export default function useGetRandomTeam(): { pokemons: Pokemon[], isLoading: boolean } {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getRandomTeam()
            .then((data) => {
                setPokemons(data.map((pokemon: any) => new Pokemon(pokemon)));
            }).finally(() => {
                setIsLoading(false)
            })
    }, []);
    return { pokemons, isLoading }
}