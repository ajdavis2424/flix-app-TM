//Mock router
const globalState = {
  currentPage: window.location.pathname,
};

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
      console.log('Home');
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
