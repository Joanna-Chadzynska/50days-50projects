const imagesEl = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
	item.addEventListener('click', () => {
		hideAllContents();
		hideAllItems();

		item.classList.add('active');
		imagesEl[idx].classList.add('show');
	});
});

function hideAllContents() {
	imagesEl.forEach((el) => el.classList.remove('show'));
}

function hideAllItems() {
	listItems.forEach((item) => item.classList.remove('active'));
}
