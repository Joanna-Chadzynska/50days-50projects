const bg = document.querySelector('.bg');
const txt = document.querySelector('.loading-txt');

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
	load++;
	if (load > 99) {
		clearInterval(int);
	}
	txt.innerText = `${load}%`;
	txt.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// map a range of numbers
function scale(num, in_min, in_max, out_min, out_max) {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
