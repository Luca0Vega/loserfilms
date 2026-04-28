
fetch("https://devsapihub.com/api-movies")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      console.log(
        data[i].title,
        data[i].image_url,
        data[i].genre,
        data[i].stars,
        data[i].year,
      );
      document.getElementById("mov").innerHTML += `<div class="movie"><h2>${data[i].title}</h2>
                                                      <img src=${data[i].image_url}>
                                                      <div class="movfilterinfo">
                                                      <p class="movDesc">${data[i].year}</p>
                                                      <p class="movDesc">${data[i].genre}</p>
                                                      <p class="movDesc">${data[i].stars}</p>
                                                      </div></div`
                                                      ;
    }
  });
