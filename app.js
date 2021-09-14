// grab all the elements that we'll need to work with
const billEl = document.querySelector("#bill");
const buttons = document.querySelectorAll("button.tip");
console.log(buttons);
const numOfPeopleEl = document.querySelector("#num-of-people");
console.log(numOfPeopleEl);

// define the function to grab the value of the selected tip and display it
const getPercent = (e) => {
	e.preventDefault();
	const percent = e.target.value;
	console.log(percent);
	const people = numOfPeopleEl.value;
	console.log(`Divided by ${people}`);
	let bill = Number(billEl.value);
	let tip = Math.round((bill * 0.01 * percent) / people);
	let total = bill / people + tip;
	console.log(`the tip per person is ${tip}`);
	console.log(`The total is ${total}`);
	console.log(numOfPeopleEl.value);
};

buttons.forEach(function (button) {
	button.addEventListener("click", getPercent);
});
