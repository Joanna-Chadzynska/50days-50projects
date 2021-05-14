const colorThief = new ColorThief();
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const images = document.querySelectorAll('img');
const btnDown = document.querySelector('.down-button');
const btnUp = document.querySelector('.up-button');
const slidesLength = images.length;

let activeSlideIndex = 0;
let activeImageIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

btnUp.addEventListener('click', () => changeSlide('up'));
btnDown.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
	const sliderHeight = sliderContainer.clientHeight;

	if (direction === 'up') {
		activeSlideIndex++;
		activeImageIndex++;

		if (activeSlideIndex > slidesLength - 1) {
			activeSlideIndex = 0;
		}
		if (activeImageIndex > slidesLength - 1) {
			activeImageIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		activeImageIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesLength - 1;
		}
		if (activeImageIndex < 0) {
			activeImageIndex = slidesLength - 1;
		}
	}

	slideRight.style.transform = `translateY(-${
		activeSlideIndex * sliderHeight
	}px)`;

	slideLeft.style.transform = `translateY(${
		activeSlideIndex * sliderHeight
	}px)`;
};

const img = images[activeImageIndex];

const color = colorThief.getColor(img);
console.log(img);
// images.forEach((img) => {
// 	if (img.complete) {
// 		colorThief.getColor(img);
// 	} else {
// 		img.addEventListener('load', () => {
// 			const color = colorThief.getColor(img);
// 		});
// 	}
// });

function getDominantColorFromImage(img) {
	console.log(img);
	if (img.complete) {
		colorThief.getColor(img);
	} else {
		img.addEventListener('load', () => {
			colorThief.getColor(img);
		});
	}
}

function updateBackground(color) {
	body.style.backgroundColor = color;
}

function rgb(values) {
	return `rgb(${values.join(', ')})`;
}
