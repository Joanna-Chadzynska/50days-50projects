const slides = document.querySelectorAll('.slide');
const arrowLeft = document.getElementById('left');
const arrowRight = document.getElementById('right');
const body = document.body;

let activeSlide = 0;

setBgToBody();

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	slides.forEach((slide) => slide.classList.remove('active'));
	slides[activeSlide].classList.add('active');
}

arrowRight.addEventListener('click', () => {
	activeSlide++;

	if (activeSlide > slides.length) {
		activeSlide = 0;
	}

	setBgToBody();
	setActiveSlide();
});
arrowLeft.addEventListener('click', () => {
	activeSlide--;

	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}

	setBgToBody();
	setActiveSlide();
});
