const template = document.querySelector("template")

fetch("https://www.omdbapi.com/?s=star trek&apikey=adf1f2d7")
  .then(response => response.json())
  .then(data => data.Search.forEach(insertMovie))

const insertMovie = (movie) => {
  const output = template.content.cloneNode(true)
  output.querySelector("img").src = movie.Poster
  output.querySelector("h2").innerText = movie.Title
  output.querySelector("p").innerText = movie.Year
  output.querySelector("a").href = `https://www.imdb.com/title/${movie.imdbID}`
  results.appendChild(output)
}