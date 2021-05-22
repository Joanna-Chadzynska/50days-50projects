const range = document.getElementById('range');
const output = document.querySelector('.label');

// map a range of numbers
function scale(num, in_min, in_max, out_min, out_max) {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

range.addEventListener('input', (e) => {
	// output.innerHTML = +e.target.value;
	const range_width = getComputedStyle(e.target).getPropertyValue('width');
	const output_width = getComputedStyle(output).getPropertyValue('width');

	const num_width_range = +range_width.substring(0, range_width.length - 2);
	const num_width_output = +output_width.substring(0, output_width.length - 2);

	const max = +e.target.max;
	const min = +e.target.min;

	const left =
		+e.target.value * (num_width_range / max) -
		num_width_output / 2 +
		scale(+e.target.value, min, max, 10, -10);
	output.style.left = `${left}px`;
});
