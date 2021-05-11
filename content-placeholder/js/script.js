const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const userName = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

function getData() {
	header.innerHTML = `
    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="laptop"/>`;
	title.innerHTML = `Lorem ipsum dolor sit amet`;
	excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sed!`;
	profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/34.jpg" alt="profile of Jane Doe" />`;
	userName.innerHTML = `Jane Doe`;
	date.innerHTML = `Oct 05, 2020`;

	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}

setTimeout(getData, 2500);
