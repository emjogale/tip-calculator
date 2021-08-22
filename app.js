// grab all the elements that we'll need to work with
const billEl = document.querySelector("#bill");
const buttons = document.querySelectorAll("button.tip");
console.log(buttons);
const numOfPeopleEl = document.querySelector("#num-of-people");
console.log(numOfPeopleEl);

// define the function to grab the value of the selected tip
const getPercent = (e) => {
	e.preventDefault();
	const percent = e.target.value;
	console.log(percent);
	console.log(numOfPeopleEl.value);
	let bill = Number(billEl.value);
	let total = bill + bill * 0.01 * percent;
	console.log(total);
};

buttons.forEach(function (button) {
	button.addEventListener("click", getPercent);
});
