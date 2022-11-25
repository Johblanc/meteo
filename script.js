const APIKEY = "7a0ee5988d92e87091d7c7331b08e5be";

/**Converti le resultat d'une requete en json */
function convertToJson(request){
    return request.json();
}

/**Lancer une requete pour une nouvelle Ville */
function newCity(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`)
    .then(request =>convertToJson(request))
    .then(result => console.log(result))
}

newCity("Toulouse")