// DOM elements
const billEl = document.querySelector("#bill");
const buttons = document.querySelectorAll(".tip");
const numOfPeopleEl = document.querySelector("#num-of-people");
const tipPerPersonEl = document.querySelector("#tip-per-person span.amount");
const totalPerPersonEl = document.querySelector(
	"#total-per-person span.amount"
);
const errorMessage = document.querySelector(".error-message");
const peopleInput = document.querySelector(".people-input");
const reset = document.querySelector(".reset");
const custom = document.querySelector("#custom");

const calculateTip = (e) => {
	e.preventDefault();
	const percent = e.target.value;
	const people = numOfPeopleEl.value;
	if (errorMessage.classList.contains("show")) {
		errorMessage.classList.remove("show");
	}
	if (peopleInput.classList.contains("red-outline")) {
		peopleInput.classList.remove("red-outline");
	}
	if (people == 0) {
		// add style to show error
		numOfPeopleEl.classList.add("error");
		errorMessage.classList.add("show");
		peopleInput.classList.add("red-outline");
	} else {
		let bill = Number(billEl.value);
		let tip = ((bill * 0.01 * percent) / people).toFixed(2);
		let total = (Number(bill / people) + Number(tip)).toFixed(2);
		tipPerPersonEl.textContent = "$" + tip;
		totalPerPersonEl.textContent = "$" + total;
	}
};

// the reset function
const resetAll = () => {
	custom.value = "";
	custom.setAttribute("placeholder", "Custom");
	billEl.value = 0;
	numOfPeopleEl.value = 0;
	tipPerPersonEl.textContent = "$0.00";
	totalPerPersonEl.textContent = "$0.00";
	errorMessage.classList.remove("show");
	peopleInput.classList.remove("red-outline");
};

// event listeners
buttons.forEach(function (button) {
	button.addEventListener("click", calculateTip);
});

reset.addEventListener("click", resetAll);
