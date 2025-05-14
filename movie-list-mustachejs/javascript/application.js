import Mustache from "mustachejs"

// 1. Basic implementation
// const title = Mustache.render("<h1>{{title}}</h1>", {"title": "Hi from Mustache"})
// results.insertAdjacentHTML("beforeend", title)

// 2. Inserting a movie card
// const template = document.querySelector("template").innerHTML

// const movie = {
//   "Title": "Harry Potter and the Deathly Hallows: Part 2",
//   "Year": "2011",
//   "imdbID": "tt1201607",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
// }

// const movieCard = Mustache.render(template, movie)
// results.insertAdjacentHTML("beforeend", movieCard)

// 3. Omdb API
const template = document.querySelector("template").innerHTML

fetch("https://www.omdbapi.com/?s=indiana jones&apikey=adf1f2d7")
  .then(response => response.json())
  .then(data => data.Search.forEach(movieCard))

const movieCard = (movie) => {
  const movieCard = Mustache.render(template, movie)
  results.insertAdjacentHTML("beforeend", movieCard)
}
