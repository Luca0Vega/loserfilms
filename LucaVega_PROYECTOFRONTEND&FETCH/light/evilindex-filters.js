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
    filtersGenre.style.display = "flex";
  } else {
    filtersGenre.style.display = "none";
  }
}

function showYears() {
  let filtersYear = document.getElementById("filterYears");
  if (filtersYear.style.display === "none") {
    filtersYear.style.display = "flex";
  } else {
    filtersYear.style.display = "none";
  }
}

function showRatings() {
  let filtersRating = document.getElementById("filterRatings");
  if (filtersRating.style.display === "none") {
    filtersRating.style.display = "flex";
  } else {
    filtersRating.style.display = "none";
  }
}

//Genre

function getGenreAction(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getGenreAdventure(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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


function getGenreBiography(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getGenreComedy(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getGenreCrime(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getGenreDrama(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getGenreFantasy(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getGenreScifi(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
    for (let i = 0; i < data.length; i++){
      if(data[i].genre == "Sci-Fi"){
        document.getElementById("mov").innerHTML += `<div class="movie"><h2 onclick="redirect()">${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div>
                                                      <p>${data[i].year}</p>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      </div></div>`
}
}})}

function getGenreWestern(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

//Year

function getYear50(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
    for (let i = 0; i < data.length; i++){
      if(data[i].year < 1960){
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

function getYear60(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getYear70(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getYear80(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getYear90(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getYear00(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getYear10(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getYear20(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

//Rating
function getRating5(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getRating4(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getRating3(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getRating2(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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

function getRating1(){
  fetch("https://devsapihub.com/api-movies").then(function(response){
    return response.json();
  }).then(function(data) {
    document.getElementById("mov").innerHTML = ""
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


//i just made some bulllllllshiiiiiiiit

