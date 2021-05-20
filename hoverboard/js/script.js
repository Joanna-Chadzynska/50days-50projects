const container = document.getElementById('container');
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseout', () => removeColor(square));

	container.appendChild(square);
}

function getRandomColor() {
	const color = Math.floor(Math.random() * 16777215).toString(16);
	return `#${color}`;
}

function setColor(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
	const color = '#1d1d1d';
	element.style.background = color;
	element.style.boxShadow = '0 0 2px #000';
}
