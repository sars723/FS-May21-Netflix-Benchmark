 const comedyDiv1=document.getElementById("comedy1")
 const dramaDiv1=document.getElementById("drama1")
 const horrerDiv1=document.getElementById("horrer1")
 const comedyDiv2=document.getElementById("comedy2")
 const dramaDiv2=document.getElementById("drama2")
 const horrerDiv2=document.getElementById("horrer2")
 const carouselDiv=document.getElementById("carousel-wrapper")
 const dramaTitle=document.getElementById("drama-title")
 const comedyTitle=document.getElementById("comedy-title")
 const horrerTitle=document.getElementById("horrer-title")
 const displayMovie=(movies,catagory)=>{
    if(catagory==="comedy"){
        comedyTitle.innerText=catagory
 comedyDiv1.innerHTML=""
    movies.filter((movie,i)=>i<6).map(movie=>{
        comedyDiv1.innerHTML+=`
        <div class="col-md-2">
        <img class="movie-cover" src="${movie.imageUrl}" />
      </div>`
    })
    comedyDiv2.innerHTML=""
    movies.filter((movie,i)=>i>=6&&i<12).map(movie=>{
        comedyDiv2.innerHTML+=`
        <div class="col-md-2">
        <img class="movie-cover" src="${movie.imageUrl}" />
      </div>`
    })
    }
    else if(catagory==="drama"){
        dramaTitle.innerText=catagory
        dramaDiv1.innerHTML=""
        movies.filter((movie,i)=>i<6).map(movie=>{
            dramaDiv1.innerHTML+=`
            <div class="col-md-2">
            <img class="movie-cover" src="${movie.imageUrl}" />
          </div>`
        })
        dramaDiv2.innerHTML=""
        movies.filter((movie,i)=>i>=6&&i<12).map(movie=>{
            dramaDiv2.innerHTML+=`
            <div class="col-md-2">
            <img class="movie-cover" src="${movie.imageUrl}" />
          </div>`
        })
    }
    else if(catagory==="horrer"){
        horrerTitle.innerText=catagory
        horrerDiv1.innerHTML=""
        movies.filter((movie,i)=>i<6).map(movie=>{
            horrerDiv1.innerHTML+=`
            <div class="col-md-2">
            <img class="movie-cover" src="${movie.imageUrl}" />
          </div>`
        })
        horrerDiv2.innerHTML=""
        movies.filter((movie,i)=>i>=6&&i<12).map(movie=>{
            horrerDiv2.innerHTML+=`
            <div class="col-md-2">
            <img class="movie-cover" src="${movie.imageUrl}" />
          </div>`
        })
    }
   

}

   const fetchMovie=async (catagory)=>{
    const response= await fetch("https://striveschool-api.herokuapp.com/api/movies/"+catagory, {
           headers: {
             Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjUwMjYxOTIsImV4cCI6MTYyNjIzNTc5Mn0.PsxaF5WqdL3M99ArdsNnDDq7wUtiPxw_4Nn-WRpsftI",
           },
         })
         const fetchedData=await response.json()
         displayMovie(fetchedData,catagory)
         console.log(fetchedData)
   }

window.onload=()=>{
    fetchMovie("comedy")
    fetchMovie("drama")
    fetchMovie("horrer")
   
}