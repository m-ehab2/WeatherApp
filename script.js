async function getWeather(loc) {
//   fetch(
//     "https://api.weatherapi.com/v1/current.json?key=d36ac9ed6f324b6a980185300232006&q=" +
//       loc,
//     { mode: "cors" }
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       console.log(response);
//     });
      const response = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=d36ac9ed6f324b6a980185300232006&q=" +
          loc,
        { mode: "cors" }
      );
      const weatherData= await response.json();
      // return Promise.resolve(weatherData);
      return weatherData;
}
const button=document.getElementById('search');
const input=document.getElementById('cityName');
const icon= document.getElementById('weatherIcon');
const cityName=document.getElementById('cityN');
const temp=document.getElementById('temp');
button.addEventListener('click', async function(){
      let x = await getWeather(input.value);
      cityName.innerHTML=x.location.name+' , '+x.location.country;
      temp.innerHTML=x.current.temp_c+' °C'
      icon.src=x.current.condition.icon;
})
async function setBase(){
let x = await getWeather('Ismailia');
cityName.innerHTML=x.location.name+' , '+x.location.country;
temp.innerHTML=x.current.temp_c+' °C'
icon.src=x.current.condition.icon;
}
setBase();