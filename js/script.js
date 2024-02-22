//Mock router
const globalState = {
  currentPage: window.location.pathname,
};

//Display 20 Popular movies
async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular');

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;

    //place in DOM
    document.querySelector('#popular-movies').appendChild(div);
  });
}

//Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  //get api key
  const API_KEY = '4426f0b18069821960ec3c8afc5d1666';
  //get api url
  const API_URL = 'https://api.themoviedb.org/3/';

  //create response
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  //our data
  const data = await response.json();

  return data;
}

//highlight active navlink
function highlightActiveLink() {
  //get navLinks
  const navLinks = document.querySelectorAll('.nav-link');
  //loop throigh links forEach
  navLinks.forEach((navLink) => {
    //check if link is eqaul to the page
    navLink.getAttribute('href') === globalState.currentPage
      ? navLink.classList.add('active')
      : false;
  });
}

//Init app -- check what page we're on
function init() {
  switch (globalState.currentPage) {
    case '/':
    case '/index.html':
      displayPopularMovies();
      break;

    case '/shows.html':
      console.log('Shows');
      break;

    case '/movie-details.html':
      console.log('Movie Details');
      break;

    case '/tv-details.html':
      console.log('TV Details');
      break;

    case '/search.html':
      console.log('Search');
      break;
  }
  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
