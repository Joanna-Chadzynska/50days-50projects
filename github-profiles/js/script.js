const API_URL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const searchInput = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
	try {
		const { data } = await axios(API_URL + username);
		createUserCard(data);
		getRepos(username);
	} catch (error) {
		if (error.response.status === 404) {
			createErrorCard('No profile with this username');
		}
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios(`${API_URL}${username}/repos?sort=created`);
		addReposToCard(data);
	} catch (error) {
		createErrorCard('Problem fetching repos');
	}
}

function createUserCard(user) {
	const { avatar_url, bio, followers, following, name, public_repos } = user;

	const cardHtml = `
    <div class="card">
		<div class="user-img">
			<img src="${avatar_url}"  alt="${name} avatar" class="avatar"/>
		</div>

		<div class="user-info">
			<h2>${name}</h2>
				<p>${
					bio
						? bio
						: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, veniam.'
				}</p>
                <ul>
					<li>${followers} <strong>Followers</strong></li>
					<li>${following} <strong>Following</strong></li>
					<li>${public_repos} <strong>Repos</strong></li>
				</ul>

	            <div id='repos'></div>
		</div>
	</div>
    `;

	main.innerHTML = cardHtml;
}

function addReposToCard(repos) {
	const reposContainer = document.getElementById('repos');
	repos.slice(0, 10).forEach((repo) => {
		const repoEl = document.createElement('a');
		repoEl.classList.add('repo');
		repoEl.href = repo.html_url;
		repoEl.target = '_blank';
		repoEl.innerText = repo.name;
		reposContainer.appendChild(repoEl);
	});
}

function createErrorCard(message) {
	const cardHtml = `
    <div class="card">
        <h1>${message}</h1>
	</div>
    `;
	main.innerHTML = cardHtml;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const user = searchInput.value;
	if (user) {
		getUser(user);
		searchInput.value = '';
	}
});
