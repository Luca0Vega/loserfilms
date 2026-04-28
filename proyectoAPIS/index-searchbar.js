
function search(){
   let searchValue = document.getElementById("searchValue").value
   console.log(searchValue)
  fetch("https://devsapihub.com/api-movies")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      if(data[i].title.toLowerCase().substring(i-1,searchValue.length).includes(searchValue.toLowerCase())){
      document.getElementById("mov").innerHTML +=     `<div class="movie"><h2>${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div class="movfilterinfo">
                                                      <p class="movDesc">${data[i].year}</p>
                                                      <p class="movDesc">${data[i].genre}</p>
                                                      <p class="movDesc">${data[i].stars}</p>
                                                      </div></div>`
                                                      ;
      document.getElementById("mov").style.display = "flex"}

                                                      
    }
  });

}

//data[i].title.toLowerCase().substring(0,searchValue.length).includes(searchValue.toLowerCase())