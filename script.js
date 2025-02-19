
const temperatureField =document.querySelector(".temp");
const locationField = document.querySelector.(".time_location p");
const dataField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form');

form.addEventListener('submit' , searchForLocation);

let targetLocation = 'Mumbai';

 const fetchResults = async (targetLocation) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=c417664c6d58487380c71034222609&q=${targetLocation}&aqi=no`

    const res = await fetch(url);
    
    const data = await res.json();


    console.log(res);

    let locationName = data.location.name;
    let time = data.location.localtime;

    let temp = data.current.temp_c;

    let condition = data.current.condition.text;

    updateDetails(temp, locationName, time,  condition)
 }

 function updateDetails(temp, locationName, time , condition){
    temperatureField.innerHTML = temp,
    locationField.innerHTML =  locationName,
    dataField.innerHTML = time,
    conditionField.innerHTML = condition,

 }
function searchForLocation(e) {
    e.preventDefault()

    target = searchField.value,

    fatchResults(target),
}


 fetchResults(targetLocation);