const movies = [
  {
    title: "Inception",
    rating: "8.8",
    description: "A mind-bending thriller about dreams within dreams.",
    poster: "https://via.placeholder.com/300x400"
  },
  {
    title: "Interstellar",
    rating: "8.6",
    description: "A journey through space and time to save humanity.",
    poster: "https://via.placeholder.com/300x400"
  },
  {
    title: "The Batman",
    rating: "7.9",
    description: "A darker take on Gotham’s vigilante hero.",
    poster: "https://via.placeholder.com/300x400"
  }
];

function renderMovies() {
  const container = document.getElementById("movieContainer");

  container.innerHTML = movies.map(movie => `
    <div class="card">
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p class="rating">⭐ ${movie.rating}</p>
      <p>${movie.description}</p>
    </div>
  `).join("");
}

renderMovies();