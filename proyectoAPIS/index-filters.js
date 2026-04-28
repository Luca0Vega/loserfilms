document.getElementById("filterGenres").style.display = "none"
document.getElementById("filterYears").style.display = "none"
document.getElementById("filterRatings").style.display = "none"

fetch("https://devsapihub.com/api-movies")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) { const allData = data})

//SHOW&HIDE

function showGenres() {
  let filtersGenre = document.getElementById("filterGenres");
  if (filtersGenre.style.display === "none") {
    filtersGenre.style.display = "block";
  } else {
    filtersGenre.style.display = "none";
  }
}

function showYears() {
  let filtersYear = document.getElementById("filterYears");
  if (filtersYear.style.display === "none") {
    filtersYear.style.display = "block";
  } else {
    filtersYear.style.display = "none";
  }
}

function showRatings() {
  let filtersRating = document.getElementById("filterRatings");
  if (filtersRating.style.display === "none") {
    filtersRating.style.display = "block";
  } else {
    filtersRating.style.display = "none";
  }
}

//Genre

function getGenreAction(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Action"){
        document.getElementById("mov").innerHTML += `<div class="movie"><h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideGenreAction(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Action"){
        document.getElementById("mov").style.display = "none"
}}})}

function getGenreAdventure(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Adventure"){
        document.getElementById("mov").innerHTML += `<div class="movie"><h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideGenreAdventure(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Adventure"){
        document.getElementById("mov").style.display = "none"
}}})}

function getGenreBiography(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Biography"){
        document.getElementById("mov").innerHTML += `<div class="movie"><h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideGenreBiography(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Biography"){
        document.getElementById("mov").style.display = "none"
}}})}

function getGenreComedy(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Comedy"){
        document.getElementById("mov").innerHTML += `<div class="movie"><h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideGenreComedy(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Comedy"){
        document.getElementById("mov").style.display = "none"
}}})}

function getGenreCrime(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Crime"){
        document.getElementById("mov").innerHTML += `<div class="movie"><h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideGenreCrime(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Crime"){
        document.getElementById("mov").style.display = "none"
}}})}

function getGenreDrama(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Drama"){
        document.getElementById("mov").innerHTML += `<div class="movie"><h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideGenreDrama(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Drama"){
        document.getElementById("mov").style.display = "none"
}}})}

function getGenreFantasy(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Fantasy"){
        document.getElementById("mov").innerHTML += `<div class="movie"><h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideGenreFantasy(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Fantasy"){
        document.getElementById("mov").style.display = "none"
}}})}

function getGenreScifi(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Scifi"){
        document.getElementById("mov").innerHTML += `<div class="movie"><h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideGenreScifi(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Sci-fi"){
        document.getElementById("mov").style.display = "none"
}}})}

function getGenreWestern(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Western"){
        document.getElementById("mov").innerHTML += `<div class="movie"><h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideGenreWestern(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Western"){
        document.getElementById("mov").style.display = "none"
}}})}

//Year

function getYear50(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year <= 1950){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideYear50(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year <= 1960){
        document.getElementById("mov").style.display = "none"
}}})}

function getYear60(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 1970 && data[i].year >= 1960){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideYear60(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 1970 && data[i].year >= 1960){
        document.getElementById("mov").style.display = "none"
}}})}

function getYear70(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 1980 && data[i].year >= 1970){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideYear70(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 1980 && data[i].year >= 1970){
        document.getElementById("mov").style.display = "none"
}}})}

function getYear80(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 1990 && data[i].year >= 1980){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideYear80(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 1990 && data[i].year >= 1980){
        document.getElementById("mov").style.display = "none"
}}})}

function getYear90(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 2000 && data[i].year >= 1990){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideYear90(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 2000 && data[i].year >= 1990){
        document.getElementById("mov").style.display = "none"
}}})}

function getYear00(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 2010 && data[i].year >= 2000){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideYear00(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 2010 && data[i].year >= 2000){
        document.getElementById("mov").style.display = "none"
}}})}


function getYear10(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 2020 && data[i].year >= 2010){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideYear10(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 2020 && data[i].year >= 2010){
        document.getElementById("mov").style.display = "none"
}}})}

function getYear20(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year >= 2020){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideYear20(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].year >= 2020){
        document.getElementById("mov").style.display = "none"
}}})}

//Rating
function getRating5(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].stars == 5){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideRating5(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].stars == 5){
        document.getElementById("mov").style.display = "none"
}}})}

function getRating4(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].stars < 5 && data[i].stars >= 4){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideRating4(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].stars < 5 && data[i].stars >= 4){
        document.getElementById("mov").style.display = "none"
}}})}


function getRating3(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].stars < 4 && data[i].stars >= 3){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideRating3(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].stars < 4 && data[i].stars >= 3){
        document.getElementById("mov").style.display = "none"
}}})}

function getRating2(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].stars < 3 && data[i].stars >= 2){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideRating2(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].stars < 3 && data[i].stars >= 2){
        document.getElementById("mov").style.display = "none"
}}})}

function getRating1(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].stars < 2 && data[i].stars >= 1){
        document.getElementById("mov").innerHTML += `<div class="movie">
                                                      <h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function hideRating1(){
fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      if(data[i].stars < 2 && data[i].stars >= 1){
        document.getElementById("mov").style.display = "none"
}}})}


//i just made some bulllllllshiiiiiiiit

