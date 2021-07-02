 const comedyDiv=document.getElementById("comedy")
 const dramaDiv=document.getElementById("drama")
 const horrerDiv=document.getElementById("horrer")
const displayComedy=(comedyMovies)=>{
    console.log(comedyMovies)
   
    console.log(comedyDiv)
    comedyDiv.innerHTML=""
    comedyMovies.forEach(movie=>{
        comedyDiv.innerHTML=`
        <div class="col-md-2">
        <img class="movie-cover" src="${movie.imageUrl}" />
      </div>`
    })

}
const displayDrama=(dramaMovies)=>{
    console.log(dramaMovies)
   
    console.log(dramaDiv)
    dramaDiv.innerHTML=""
    dramaMovies.forEach(movie=>{
       dramaDiv.innerHTML=`
        <div class="col-md-2">
        <img class="movie-cover" src="${movie.imageUrl}" />
      </div>`
    })

}
const displayHorrer=(horrerMovies)=>{
    console.log(horrerMovies)
   
    console.log(horrerDiv)
    horrerDiv.innerHTML=""
    horrerMovies.forEach(movie=>{
        horrerDiv.innerHTML=`
        <div class="col-md-2">
        <img class="movie-cover" src="${movie.imageUrl}" />
      </div>`
    })

}
const fetchComedy=async ()=>{
 const response= await fetch("https://striveschool-api.herokuapp.com/api/movies/comedy", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjUwMjYxOTIsImV4cCI6MTYyNjIzNTc5Mn0.PsxaF5WqdL3M99ArdsNnDDq7wUtiPxw_4Nn-WRpsftI",
        },
      })
      const fetchedData=await response.json()
      displayComedy(fetchedData)
      console.log(fetchedData)
}
const fetchDrama=async ()=>{
    const response= await fetch("https://striveschool-api.herokuapp.com/api/movies/drama", {
           headers: {
             Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjUwMjYxOTIsImV4cCI6MTYyNjIzNTc5Mn0.PsxaF5WqdL3M99ArdsNnDDq7wUtiPxw_4Nn-WRpsftI",
           },
         })
         const fetchedData=await response.json()
         displayDrama(fetchedData)
         console.log(fetchedData)
   }
   const fetchHorrer=async ()=>{
    const response= await fetch("https://striveschool-api.herokuapp.com/api/movies/drama", {
           headers: {
             Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjUwMjYxOTIsImV4cCI6MTYyNjIzNTc5Mn0.PsxaF5WqdL3M99ArdsNnDDq7wUtiPxw_4Nn-WRpsftI",
           },
         })
         const fetchedData=await response.json()
         displayHorrer(fetchedData)
         console.log(fetchedData)
   }

window.onload=()=>{
    let categories=["comedy","drama","horrer"]
    fetchComedy()
    fetchDrama()
    fetchHorrer()
  
}