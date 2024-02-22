
document.querySelector("#open-nav-menu").addEventListener("click", function(){document.querySelector("header nav .wrapper").classList.add("nav-open");});

document.querySelector("#close-nav-menu").addEventListener("click", function(){document.querySelector("header nav .wrapper").classList.remove("nav-open");});


//Greeting Section

function celsiusToFahr(temp){
    let fahr = (temp * 9/5) + 32;
    return fahr;
}

let currentHour = new Date().getHours();
let greetingText;
if (currentHour < 12) {
    greetingText = "Good Morning";
} else if (currentHour < 19){
    greetingText = "Good Afternoon";
} else if (currentHour < 24){
    greetingText = "Good Evening";
} else {
    greetingText = "Welcome";
}

const weatherCondition = "sunny";
const userLocation = " Mumbai";
let temp = 25;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and its ${temp.toFixed(1)}C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and its ${celsiusToFahr(temp).toFixed(1)}F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", function(e){
   if(e.target.id == "celsius") {
    document.querySelector("p#weather").innerHTML = celsiusText;
   }else if (e.target.id == "fahr") {
    document.querySelector("p#weather").innerHTML = fahrText;
   }

});

//Local time section

setInterval(function(){
    let localTime = new Date();
    let hour = localTime.getHours();
    if(hour > 12){
        hour = hour - 12;
    }
    document.querySelector("span[data-time=hours]").textContent = hour.toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0"); 
},1000);

//Gallery Section

const galleryImages = [
    {
        src:"./assets/gallery/image1.jpg",
        alt:"Thumbnail Image 1"
    },
    {
        src:"./assets/gallery/image2.jpg",
        alt:"Thumbnail Image 2"
    },
    {
        src:"./assets/gallery/image3.jpg",
        alt:"Thumbnail Image 3"
    }
]
// for (let i in galleryImages){
//     console.log(galleryImages[i]);
// }
let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

galleryImages.forEach(function(image,index){
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false;

    thumb.addEventListener("click", function(e){
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedimage = galleryImages[selectedIndex];
        mainImage.src = selectedimage.src;
        mainImage.alt = selectedimage.alt;
        thumbnails.querySelectorAll("img").forEach(function(img){
            img.dataset.selected = false;
        });
        e.target.dataset.selected = true;
    });

    thumbnails.appendChild(thumb);
});

