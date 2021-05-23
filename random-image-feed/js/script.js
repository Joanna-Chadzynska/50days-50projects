const container = document.querySelector('.container');
const unsplash_url = 'https://source.unsplash.com/random/';
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
	const img = document.createElement('img');
	img.src = `${unsplash_url}${getRandomSize()}`;
	container.appendChild(img);
}

function getRandomSize() {
	return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
	return Math.floor(Math.random() * 10) + 300;
}
