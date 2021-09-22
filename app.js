// grab all the elements that we'll need to work with
const billEl = document.querySelector("#bill");
const buttons = document.querySelectorAll("button.tip");
const numOfPeopleEl = document.querySelector("#num-of-people");
console.log(numOfPeopleEl);
const tipPerPersonEl = document.querySelector("#tip-per-person span.amount");
const totalPerPersonEl = document.querySelector(
	"#total-per-person span.amount"
);
const errorMessage = document.querySelector(".error-message");
console.log(errorMessage);
const reset = document.querySelector(".reset");
console.log(reset);

// define the function to grab the value of the selected tip and display it
const getPercent = (e) => {
	e.preventDefault();
	const percent = e.target.value;
	const people = numOfPeopleEl.value;

	if (!people) {
		console.log("no people!!!!");
		// add style to show error - border not
		numOfPeopleEl.classList.add("error");
		errorMessage.classList.add("show");
	} else {
		console.log(`Divided by ${people}`);
		let bill = Number(billEl.value);
		let tip = ((bill * 0.01 * percent) / people).toFixed(2);
		let total = (Number(bill / people) + Number(tip)).toFixed(2);
		// console.log(`the total per person is ${total}`);
		console.log(`the tip per person is ${tip}`);
		console.log(`The total is ${total}`);
		tipPerPersonEl.textContent = "$" + tip;
		totalPerPersonEl.textContent = "$" + total;
	}
};

const resetAll = () => {
	billEl.value = 0;
	numOfPeopleEl.value = 0;
	tipPerPersonEl.textContent = "$0.00";
	totalPerPersonEl.textContent = "$0.00";
	errorMessage.classList.remove("show");
};

buttons.forEach(function (button) {
	button.addEventListener("click", getPercent);
});

reset.addEventListener("click", resetAll);
