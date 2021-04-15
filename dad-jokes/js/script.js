const jokeEl = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	try {
		const resp = await fetch('https://icanhazdadjoke.com/', config);
		const data = await resp.json();
		jokeEl.innerHTML = data.joke;
	} catch (error) {
		console.log(error.message);
	}
}

btn.addEventListener('click', generateJoke);
