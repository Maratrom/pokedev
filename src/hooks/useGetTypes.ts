import { useEffect, useState } from "react";
import { getTypes } from "../Repository/typesRepository";
import { Pokemon, Type } from "../Types/pokemonsTypes";

export default function useGetTypes(): { types: Type[], isLoading: boolean } {
    const [types, setTypes] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getTypes()
            .then((data) => {
                setTypes(data.map((type: any) => new Type(type)));
            }).finally(() => {
                setIsLoading(false)
            })
    }, []);
    return { types: types, isLoading }
}