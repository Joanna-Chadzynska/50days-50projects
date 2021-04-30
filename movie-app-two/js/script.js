const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const API_KEY = '3f1f5c28069c7144d7ae13ffdaa9c846';
const API_URL = `https://api.themoviedb.org/3/discover/movie??sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
// console.log(client)

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
	try {
		const resp = await fetch(url);
		const data = await resp.json();
		showMovies(data.results);
	} catch (error) {
		console.log(error.message);
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchTerm = search.value;
	if (searchTerm && searchTerm !== '') {
		const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${searchTerm}`;
		getMovies(SEARCH_URL);
		search.value = '';
	} else {
		window.location.reload();
	}
});

function showMovies(movies) {
	main.innerHTML = '';

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;
		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');
		movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
									vote_average
								)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>Overview</h3>
                ${overview}
            </div>
        `;
		main.appendChild(movieEl);
	});

	main.appendChild(movies);
}

function getClassByRate(rate) {
	if (rate >= 8) {
		return 'green';
	} else if (rate >= 5) {
		return 'orange';
	} else {
		return 'red';
	}
}
