fetch("https://www.omdbapi.com/?s=alien&apikey=adf1f2d7")
  .then(response => response.json())
  .then(data => {
    data.Search.forEach(movie => displayCard(movie))
  })

  const displayCard = (movie) => {
    console.log(movie)
    const movieCard = `<div class='col-3'>
    <div class="card" style="width: 18rem;">
      <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title} poster">
      <div class="card-body">
        <h2 class="card-title">${movie.Title}</h2>
        <p class="card-text">${movie.Year}</p>
        <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
      </div>
    </div>
    </div>`
    results.insertAdjacentHTML("beforeend", movieCard)
  }