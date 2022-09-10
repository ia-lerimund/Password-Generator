let letters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specChars = [
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let button = document.getElementById("generateBtn");
let text = document.getElementById("text");
let number = document.getElementById("number");

function randomChar() {
	let wholeArr = letters.concat(numbers).concat(specChars);
	let randomChar = Math.floor(Math.random() * wholeArr.length);
	if (text.value.toLowerCase() === "numbers") {
		wholeArr = letters.concat(specChars);
		randomChar = Math.floor(Math.random() * wholeArr.length);
		return wholeArr[randomChar];
	} else if (text.value.toLowerCase() === "special chars") {
		wholeArr = letters.concat(numbers);
		randomChar = Math.floor(Math.random() * wholeArr.length);
		return wholeArr[randomChar];
	}
}
function generatePassword() {
	let randomPassword = "";
	if (number.valueAsNumber > 15) {
		alert("Please choose length between 4 and 15");
	} else if (number.value == "") {
		for (let i = 0; i < 15; i++) {
			randomPassword += randomChar();
		}
	} else if (number.value !== "") {
		for (let i = 0; i < number.valueAsNumber; i++) {
			randomPassword += randomChar();
		}
	}
	return randomPassword;
}
function launch() {
	let password1 = generatePassword();
	let password2 = generatePassword();
	option1.textContent = password1;
	option2.textContent = password2;
}
function copyOption1() {
	const copyOption = navigator.clipboard;
	copyOption.writeText(option1.innerText);
}
function copyOption2() {
	const copyOption = navigator.clipboard;
	copyOption.writeText(option2.innerText);
}

button.onclick = launch;
option1.onclick = copyOption1;
option2.onclick = copyOption2;
