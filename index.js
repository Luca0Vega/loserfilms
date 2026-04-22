fetch("https://devsapihub.com/api-movies").then(function (response) {
  return response.json();}).then (function (data) {
          for(let i = 0; i < data.length; i++){
          if(data[i].genre == "Fantasy"){
          console.log(data[i].title, data[i].image_url, data[i].genre, data[i].stars, data[i].year);
          document.getElementById("mov").innerHTML += `<h2>${data[i].title}</h2>
                                                      <img src=${data[i].image_url}></div>
                                                      <p>${data[i].genre}</p>
                                                      <p>${data[i].stars}</p>
                                                      <p>${data[i].year}</p>`}}}); 
