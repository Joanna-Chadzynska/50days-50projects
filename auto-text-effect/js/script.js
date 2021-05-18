const textEl = document.getElementById('text');
const speedInput = document.getElementById('speed');

const text = 'We Love Programming!';

let speed = 300 / speedInput.value;
let idx = 1;

writeText();

function writeText() {
	textEl.innerText = text.slice(0, idx);
	idx++;

	if (idx > text.length) {
		idx = 1;
	}

	setTimeout(writeText, speed);
}

speedInput.addEventListener('input', (e) => (speed = 300 / e.target.value));
