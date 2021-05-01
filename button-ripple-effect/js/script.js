const buttons = document.querySelectorAll('.ripple');

const circle = `<span class="circle" style="top: 27px; left: 52px"></span>`;

buttons.forEach((button) => {
	button.addEventListener('click', function (e) {
		const x = e.clientX;
		const y = e.clientY;

		const btnTop = e.target.offsetTop;
		const btnLeft = e.target.offsetLeft;

		const xInside = x - btnLeft;
		const yInside = y - btnTop;

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = `${yInside}px`;
		circle.style.left = `${xInside}px`;

		this.appendChild(circle);

		setTimeout(() => circle.remove(), 500);
	});
});
