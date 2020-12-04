export default function fetchPlanets() {
    const PLANET_URL = 'http://52.53.150.109:8080/AdeptusAdministratum/planets';

    fetch(PLANET_URL)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
        })
};