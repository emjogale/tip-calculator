// grab all the elements that we'll need to work with
const billEl = document.querySelector("#bill");
const buttons = document.querySelectorAll("button.tip");
const numOfPeopleEl = document.querySelector("#num-of-people");
const tipPerPersonEl = document.querySelector("#tip-per-person span.amount");
console.log(tipPerPersonEl);
const totalPerPersonEl = document.querySelector("#total");
const reset = document.querySelector(".reset");

// define the function to grab the value of the selected tip and display it
const getPercent = (e) => {
	e.preventDefault();
	const percent = e.target.value;
	const people = numOfPeopleEl.value;
	if (!people) {
		// Put in functionality to complain if number of people === 0
		console.log("you have to put people in !!");
	} else {
		console.log(`Divided by ${people}`);
		let bill = Number(billEl.value);
		let tip = ((bill * 0.01 * percent) / people).toFixed(2);
		let total = (Number(bill / people) + Number(tip)).toFixed(2);
		// console.log(`the total per person is ${total}`);
		console.log(`the tip per person is ${tip}`);
		console.log(`The total is ${total}`);
		// totalPerPersonEl.textContent = tip; work out how to do this!!
	}
};

const resetAll = () => {
	console.log("ok so now we need to reset everything");
};

buttons.forEach(function (button) {
	button.addEventListener("click", getPercent);
});

reset.addEventListener("click", resetAll);
