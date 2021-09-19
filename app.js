// grab all the elements that we'll need to work with
const billEl = document.querySelector("#bill");
const buttons = document.querySelectorAll("button.tip");
const numOfPeopleEl = document.querySelector("#num-of-people");
const tipPerPersonEl = document.querySelector("#tip-per-person");
const totalPerPersonEl = document.querySelector("#total");

// TODO format answers with $ signs and tidy up code!!
// Put in functionality to complain if number of people === 0
// also!! check but

// define the function to grab the value of the selected tip and display it
const getPercent = (e) => {
	e.preventDefault();
	const percent = e.target.value;
	const people = numOfPeopleEl.value;
	console.log(`Divided by ${people}`);
	let bill = Number(billEl.value);
	let tip = ((bill * 0.01 * percent) / people).toFixed(2);
	let total = (Number(bill / people) + Number(tip)).toFixed(2);
	// console.log(`the total per person is ${total}`);
	console.log(`the tip per person is ${tip}`);
	console.log(`The total is ${total}`);
	tipPerPersonEl.textContent = `$${tip}`;
	console.log(tipPerPersonEl.value);
	totalPerPersonEl.value = total;
};

buttons.forEach(function (button) {
	button.addEventListener("click", getPercent);
});
