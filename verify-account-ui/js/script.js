const nums = document.querySelectorAll('.code');

nums[0].focus();

nums.forEach((num, idx) => {
	num.addEventListener('keydown', (e) => {
		if (e.key >= 0 && e.key <= 9) {
			nums[idx] = '';
			setTimeout(() => nums[idx + 1].focus(), 10);
		} else if (e.key === 'Backspace') {
			setTimeout(() => nums[idx - 1].focus(), 10);
		}
	});
});
