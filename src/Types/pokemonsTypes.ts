export class Pokemon {
    id: number;
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: Stats;
    types: Type[];
    generation: number;
    resistance: [{ name: string, damageMultiplier: number, damageRelation: string }]
    resistanceModifyingAbilitiesForApi: [];
    evolutions: { name: string, pokedexId: number };
    preEvolution: boolean;
    resistanceWithAbilities: [];

    constructor(pokemon: any) {
        this.id = pokemon.id;
        this.pokedexId = pokemon.pokedexId;
        this.name = pokemon.name;
        this.image = pokemon.image;
        this.sprite = pokemon.sprite;
        this.slug = pokemon.slug;
        this.stats = new Stats(pokemon.stats);
        this.types = pokemon.apiTypes;
        this.generation = pokemon.apiGeneration;
        this.resistance = pokemon.apiResistances;
        this.resistanceModifyingAbilitiesForApi = pokemon.resistanceModifyingAbilitiesForApi;
        this.evolutions = pokemon.apiEvolutions;
        this.preEvolution = pokemon.apiPreEvolution;
        this.resistanceWithAbilities = pokemon.apiResistancesWithAbilities;
    }
}

export class Type {
    name: string;
    image: string;

    constructor(type: { name: string, image: string }) {
        this.name = type.name;
        this.image = type.image;
    }

}

export class Stats {
    hp: number;
    attack: number;
    defence: number;
    specialAttack: number;
    specialDefence: number;
    speed: number;

    constructor(stats: any) {
        this.hp = stats.HP;
        this.attack = stats.attack;
        this.defence = stats.defense;
        this.specialAttack = stats.special_attack;
        this.specialDefence = stats.defense;
        this.speed = stats.speed
    }

}