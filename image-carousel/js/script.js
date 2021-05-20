import PEXELS_API_KEY from './api.js';
const BASE_URL = 'https://api.pexels.com/v1/';
const imagesContainer = document.getElementById('imgs');
const btnPrev = document.getElementById('left');
const btnNext = document.getElementById('right');

let idx = 0;

fetchImages();

async function fetchImages() {
	try {
		const resp = await fetch(`${BASE_URL}curated`, {
			headers: {
				Authorization: PEXELS_API_KEY,
			},
		});
		const data = await resp.json();

		setTimeout(() => setImages(data.photos), 500);
	} catch (error) {
		console.log(error.message);
	}
}

function setImages(images) {
	images.map((image) => {
		const img = document.createElement('img');
		const url = image.src.landscape;
		img.src = url;
		const imageName = image.url.split('/')[4].split('-');
		imageName.pop();
		img.alt = imageName.join(' ');
		imagesContainer.appendChild(img);
	});

	let interval = setInterval(() => run(images), 2000);
	btnNext.addEventListener('click', () => {
		idx++;

		changeImage(images);
		clearInterval(interval);
		interval = setInterval(() => run(images), 2000);
	});
	btnPrev.addEventListener('click', () => {
		idx--;

		changeImage(images);
		clearInterval(interval);
		interval = setInterval(() => run(images), 2000);
	});
}

function run(imgs) {
	idx++;
	changeImage(imgs);
}

function changeImage(imgs) {
	if (idx > imgs.length - 1) {
		idx = 0;
	} else if (idx < 0) {
		idx = imgs.length - 1;
	}

	imagesContainer.style.transform = `translateX(${-idx * 500}px)`;
}
