var decimalPressed = false;
var operator = "";
var preNumber = "";


function numButton(buttonNumber) {
		console.log("button clicked " + buttonNumber);
		var val = $('.input-display').val() + buttonNumber;
		$('.input-display').val(val);
		//document.getElementById('display').value = document.getElementById('display').value + buttonNumber;
	}

function decimalButton(decimal) {
	console.log("button clicked " + decimal);
	if (decimalPressed == false) {
		document.getElementById('display').value = document.getElementById('display').value + decimal;
		decimalPressed = true;
	}
}
function addition() {
	operator = "+";
	console.log("operator clicked " + operator);
	preNumber = parseFloat(document.getElementById('display').value);
	document.getElementById('display').value = "";
	decimalPressed = false;
}
function subtraction() {
	operator = "-";
	console.log("operator clicked " + operator);
	preNumber = parseFloat(document.getElementById('display').value);
	document.getElementById('display').value = "";
	decimalPressed = false;
}
function multiply() {
	operator = "*";
	console.log("operator clicked " + operator);
	preNumber = parseFloat(document.getElementById('display').value);
	document.getElementById('display').value = "";
	decimalPressed = false;
}
function divide() {
	operator = "/";
	console.log("operator clicked " + operator);
	preNumber = parseFloat(document.getElementById('display').value);
	document.getElementById('display').value = "";
	decimalPressed = false;
}
function clear1() {
	preNumber = parseFloat(document.getElementById('display').value);
	document.getElementById('display').value = "";
	console.log("clear was pressed");
	decimalPressed = false;
}
function reset() {
	preNumber = "";
	document.getElementById('display').value = "";
	decimalPressed = false;
}
function calculate() {
	operator = "="
	console.log("operator clicked " + operator);
	if (preNumber === "") {
		return;
	}
	switch (operator) {
	case "+":
		document.getElementById('display').value = preNumber + parseFloat(document.getElementById('display').value);
		break;
	case "-":
		document.getElementById('display').value = preNumber - parseFloat(document.getElementById('display').value);
		break;
	case "*":
		document.getElementById('display').value = preNumber * parseFloat(document.getElementById('display').value);
		break;
	case "/":
		document.getElementById('display').value = preNumber / parseFloat(document.getElementById('display').value);
	}
}
