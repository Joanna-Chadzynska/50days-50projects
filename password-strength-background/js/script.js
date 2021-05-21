const bg = document.getElementById('background');
const email = document.getElementById('email');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
	const { value } = e.target;
	const length = value.length;
	const blurValue = 20 - length * 2;
	bg.style.filter = `blur(${blurValue}px)`;
});
