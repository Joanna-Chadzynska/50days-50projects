const resultEl = document.getElementById('result');

const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');

const clipboardBtn = document.getElementById('clipboard');
const generateBtn = document.getElementById('generate');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

generateBtn.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numberEl.checked;
	const hasSymbol = symbolEl.checked;

	resultEl.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length
	);
});

clipboardBtn.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	if (!password) return;
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('The password is copied to clipboard!');
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
		(type) => Object.values(type)[0]
	);

	if (typesCount === 0) return '';

	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);
	console.log(finalPassword);
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.?_-+';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePasswordU() {
	var buf = new Uint8Array(6);
	window.crypto.getRandomValues(buf);
	return btoa(String.fromCharCode.apply(null, buf));
}

function randomPassword(
	len = 8,
	minUpper = 0,
	minLower = 0,
	minNumber = -1,
	minSpecial = -1
) {
	let chars = String.fromCharCode(...Array(127).keys()).slice(33), //chars
		A2Z = String.fromCharCode(...Array(91).keys()).slice(65), //A-Z
		a2z = String.fromCharCode(...Array(123).keys()).slice(97), //a-z
		zero2nine = String.fromCharCode(...Array(58).keys()).slice(48), //0-9
		specials = chars.replace(/\w/g, '');
	if (minSpecial < 0) chars = zero2nine + A2Z + a2z;
	if (minNumber < 0) chars = chars.replace(zero2nine, '');
	let minRequired = minSpecial + minUpper + minLower + minNumber;
	let rs = [].concat(
		Array.from(
			{ length: minSpecial ? minSpecial : 0 },
			() => specials[Math.floor(Math.random() * specials.length)]
		),
		Array.from(
			{ length: minUpper ? minUpper : 0 },
			() => A2Z[Math.floor(Math.random() * A2Z.length)]
		),
		Array.from(
			{ length: minLower ? minLower : 0 },
			() => a2z[Math.floor(Math.random() * a2z.length)]
		),
		Array.from(
			{ length: minNumber ? minNumber : 0 },
			() => zero2nine[Math.floor(Math.random() * zero2nine.length)]
		),
		Array.from(
			{ length: Math.max(len, minRequired) - (minRequired ? minRequired : 0) },
			() => chars[Math.floor(Math.random() * chars.length)]
		)
	);
	return rs.sort(() => Math.random() > Math.random()).join('');
}
randomPassword(12, 1, 1, -1, -1); // -> DDYxdVcvIyLgeB
randomPassword(12, 1, 1, 1, -1); // -> KYXTbKf9vpMu0
randomPassword(12, 1, 1, 1, 1); // -> hj|9)V5YKb=7
