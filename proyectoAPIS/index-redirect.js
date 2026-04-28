let actualMovies =  ["https://www.youtube.com/watch?v=IuSwvdIsM_E", "https://www.youtube.com/watch?v=E05pI-sXI7g", "https://www.youtube.com/watch?v=s6OoKCgTxCY", "https://www.youtube.com/watch?v=br5eTcMm6hM", "https://www.youtube.com/watch?v=fvx_GX1oK_E"]



    document.getElementById("embededContent").innerHTML = `<embed src="${actualMovies[Math.random()*5]}"></embed>`
