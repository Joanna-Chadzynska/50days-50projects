const BASE_URL = 'https://pokeapi.co/api/v2/';

const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 150;

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
};

const mainTypes = Object.keys(colors);

const getPokemon = async (id) => {
	try {
		const resp = await fetch(`${BASE_URL}pokemon/${id}`);
		const data = await resp.json();
		createPokemonCard(data);
	} catch (error) {}
};

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemonCount; i++) {
		await getPokemon(i);
	}
};

fetchPokemons();
const createPokemonCard = (pokemon) => {
	const { id, name, types } = pokemon;
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const pokeName = name[0].toUpperCase() + name.slice(1);
	const pokeId = id.toString().padStart(3, '0');

	const pokeTypes = types.map((type) => type.type.name);
	const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

	const color = colors[type];

	pokemonEl.style.background = color;

	const pokeInnerHtml = `
    <div class="img-container">
	    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="pokemon $${name}" />
	</div>
	<div class="info">
		<span class="number">#${pokeId}</span>
		<h3 class="name">${pokeName}</h3>
		<small class="type">Type: <span>${type}</span></small>
	</div>
    `;
	pokemonEl.innerHTML = pokeInnerHtml;
	pokeContainer.appendChild(pokemonEl);
};
