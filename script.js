const APIKEY = "7a0ee5988d92e87091d7c7331b08e5be";

/**Converti le resultat d'une requete en json */
function convertToJson(request){
    return request.json();
}

/**Converti la requete en Objet contenant les données que l'on souhaite conserver */
function convertToObject(jsonRequest){
    return {
        name: jsonRequest.name,
        feel: Math.floor(jsonRequest.main.feels_like + 0.5),
        max : Math.floor(jsonRequest.main.temp_max + 0.5),
        min : Math.floor(jsonRequest.main.temp_min + 0.5),
        humi: jsonRequest.main.humidity,
        desc: jsonRequest.weather[0].description,
        icon: jsonRequest.weather[0].icon,
        speed: Math.floor(jsonRequest.wind.speed + 0.5),
        deg : jsonRequest.wind.deg
    }
}

/**Change le contenu d'une balise identifiée */
function changeContentById(id, content){
    document.getElementById(id).textContent = content;
}


/**Lancer une requete pour une nouvelle Ville */
function newCity(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`)
    .then(result =>convertToJson(result))
    .then(result => {
        let data = convertToObject(result);
        console.log(data);
    })
}

newCity("Toulouse")