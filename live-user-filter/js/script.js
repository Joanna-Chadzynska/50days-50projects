const filterInput = document.getElementById('filter');
const resultsContainer = document.getElementById('result');

const url = 'https://randomuser.me/api/?results=50';

let listItems = [];

getData();

filterInput.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
	try {
		const resp = await fetch(url);
		const { results } = await resp.json();

		resultsContainer.innerHTML = '';
		results.forEach((user) => {
			const userEl = document.createElement('li');
			const { name, picture, location } = user;

			listItems.push(userEl);

			userEl.innerHTML = `
            <img src="${picture.large}" alt="${name.first} ${name.last}" />
			<div class="user-info">
				<h4>${name.first} ${name.last}</h4>
				<p>${location.city}, ${location.country}</p>
			</div>
            `;

			resultsContainer.appendChild(userEl);
		});
	} catch (error) {
		console.log(error.message);
	}
}

function filterData(searchTerm) {
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
			item.classList.remove('hide');
		} else {
			item.classList.add('hide');
		}
	});
}
