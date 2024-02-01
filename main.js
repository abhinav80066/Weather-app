
document.querySelector("#open-nav-menu").addEventListener("click", function(){document.querySelector("header nav .wrapper").classList.add("nav-open");});

document.querySelector("#close-nav-menu").addEventListener("click", function(){document.querySelector("header nav .wrapper").classList.remove("nav-open");});


//Greeting Section

const greetingText = "Good Morning";
const weatherCondition = "sunny";
const userLocation = " Mumbai";
let temp = 22.378;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and its ${temp.toFixed(1)}C outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;

document.querySelector(".weather-group").addEventListener("click", function(e){
   if(e.target.id == "celsius") {
    console.log("Celsius is clicked")
   }else if (e.target.id == "fahr") {
    console.log("Fahr is clicked")
   }
    

})