const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
	{
		name: 'Miyah Miles',
		position: 'Marketing',
		photo: 'https://randomuser.me/api/portraits/women/46.jpg',
		text: 'It was the best investment I ever made. I would also like to say thank you to all your staff. Without it, we would have gone bankrupt by now.',
	},
	{
		name: 'Wylie Wang',
		position: 'Designer',
		photo: 'https://randomuser.me/api/portraits/men/46.jpg',
		text: 'Really good. I made back the purchase price in just 48 hours! I have gotten at least 50 times the value from it. Dude, your stuff is the bomb!',
	},
	{
		name: 'Mallorie O.',
		position: 'Programmer',
		photo: 'https://randomuser.me/api/portraits/women/30.jpg',
		text: 'No matter where you go, it is the coolest, most happening thing around! I STRONGLY recommend it to EVERYONE interested in running a successful online business! Keep up the excellent work. Absolutely wonderful!',
	},
	{
		name: 'Esther C.',
		position: 'Marketing',
		photo: 'https://randomuser.me/api/portraits/women/35.jpg',
		text: "Thanks guys, keep up the good work! I will recommend you to my colleagues. We're loving it. Without it, we would have gone bankrupt by now.",
	},
	{
		name: 'Dan White',
		position: 'CEO',
		photo: 'https://randomuser.me/api/portraits/men/50.jpg',
		text: 'Dude, your stuff is the bomb! Definitely worth the investment. Great job, I will definitely be ordering again! I have gotten at least 50 times the value from it.',
	},
	{
		name: 'Dale Young',
		position: 'Marketing',
		photo: 'https://randomuser.me/api/portraits/men/36.jpg',
		text: "Without it, we would have gone bankrupt by now. We've seen amazing results already. It saved my business. It's just amazing.",
	},
];

let idx = 1;

function updateTestimonial() {
	const { name, position, photo, text } = testimonials[idx];

	testimonial.innerHTML = text;
	userImage.src = photo;
	userImage.alt = `user ${name}`;
	userName.innerHTML = name;
	role.innerHTML = position;

	idx++;

	if (idx > testimonials.length - 1) {
		idx = 0;
	}
}

setInterval(updateTestimonial, 10000);
