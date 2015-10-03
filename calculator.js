var add = function(num1, num2) {
	return num1 + num2;
}

var subtract = function(num1, num2) {
	return num1 - num2;
}

var divide = function(numerator, denominator) {
	return numerator/denominator;
}

var multiply = function(num1, num2) {
	return num1 * num2;
}

var screen = [];
var opMode = true;

$(function() {

	$("#clear").click(function() {
 		screen.length = 0;
 		console.log(screen);
 	});
    
	$(".digit p").click(function() {
		if(!opMode) {
			screen[screen.length-1] += this.innerHTML;
			console.log(screen);
		} else {
			screen.push(this.innerHTML);
			console.log(screen);
			opMode = false;
		}
	});

	$(".op p").click(function() {
		if(!opMode) {
			screen.push(this.innerHTML);
			opMode = true;
			console.log(screen);
		}
 	});

});