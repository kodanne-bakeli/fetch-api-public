let value = document.getElementById('input')
function buttonClickGET() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${value.value},fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric`
    //recupérons l'url avec fecth et effectuons une promesse
    //si la promesse se realise
    fetch(url).then((response) =>
        //effectuons une deuxieme promesse
        response.json().then((data) => {
            //faisons appel a une fonction pour afficher la temperature
            function callBackGetSuccess() {
                let element = document.getElementById("zone_meteo");
                element.innerHTML = "La temperature est de " + data.main.temp;
            }
            callBackGetSuccess();
        })//si jamais la promesse ne se realise pas
    ).catch(err => console.log("erreur :" + err));

}

