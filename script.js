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
        desc: jsonRequest.weather[0].description,
        icon: jsonRequest.weather[0].icon,
        humi: jsonRequest.main.humidity,
        speed: Math.floor(jsonRequest.wind.speed + 0.5),
        deg : jsonRequest.wind.deg
    }
}

/**Change le contenu d'une balise identifiée */
function changeContentById(id, content){
    document.getElementById(id).textContent = content;
}


/**Permet l'affichage des données récoltées */
function refreshDisplay(data){
    changeContentById("city-name", data.name);
    changeContentById("temp-feel", data.feel);
    changeContentById("temp-max", data.max);
    changeContentById("temp-min", data.min);
    changeContentById("humidity", data.humi);
    changeContentById("speed", data.speed);
}

/**Lancer une requete pour une nouvelle Ville */
function newCity(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`)
    .then(result =>convertToJson(result))
    .then(result => refreshDisplay(convertToObject(result)))
}

newCity("Toulouse")