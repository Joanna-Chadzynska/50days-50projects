const keys = document.querySelectorAll('.key');
const insert = document.querySelector('.insert');

function checkLocation(location) {
	switch (location) {
		case 0:
		default:
			return '(General keys)';
		case 1:
			return '(Left-side modifier keys)';
		case 2:
			return '(Right-side modifier keys)';
		case 3:
			return '(Numpad)';
	}
}

window.addEventListener('keydown', (e) => {
	console.log(e);
	const location = checkLocation(e.location);
	insert.innerHTML = `
            <div class="key">
				${e.key === ' ' ? 'Space' : e.key}
				<small>event.key</small>
			</div>

			<div class="key">
				${e.location}
                <p>${location}</p>
				<small>event.location</small>
			</div>
			<div class="key">
				${e.code}
				<small>event.code</small>
			</div>
			<div class="key">
				${e.keyCode}
				<small>event.keyCode</small>
			</div>`;
});
