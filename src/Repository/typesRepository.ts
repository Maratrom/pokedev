export async function getTypes() {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/types`);
    const data = await response.json();
    return data;
}


export async function getRandomType() {
    // générer une équipe random https://pokebuildapi.fr/api/v1/random/team
    // prendre le premier
}