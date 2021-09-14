// grab all the elements that we'll need to work with
const billEl = document.querySelector("#bill");
const buttons = document.querySelectorAll("button.tip");
console.log(buttons);
const numOfPeopleEl = document.querySelector("#num-of-people");
console.log(numOfPeopleEl);
const tipPerPerson = document.querySelector("#tip-per-person");
const totalPerPerson = document.querySelector("#total");
console.log(totalPerPerson);

// TODO format answers with $ signs and tidy up code!!
// Put in functionality to complain if number of people === 0

// define the function to grab the value of the selected tip and display it
const getPercent = (e) => {
	e.preventDefault();
	const percent = e.target.value;
	console.log(percent);
	const people = numOfPeopleEl.value;
	console.log(`Divided by ${people}`);
	let bill = Number(billEl.value);
	let tip = ((bill * 0.01 * percent) / people).toFixed(2);
	let total = (Number(bill / people) + Number(tip)).toFixed(2);
	console.log(`the total per person is ${total}`);
	console.log(`the tip per person is ${tip}`);
	console.log(`The total is ${total}`);
	tipPerPerson.value = tip;
	console.log(tipPerPerson.value);
	totalPerPerson.value = total;
};

buttons.forEach(function (button) {
	button.addEventListener("click", getPercent);
});
