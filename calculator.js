/*
	TODO
	
		-Fix input when 0 is entered first
		-change input mode after = is selected
		-add decimal button


*/



var updateScreen = function() {
	$("#screen p").text(screen.join(" "));
}

var calculate = function() {
	for(var i = 0; i < screen.length; i++) {
		if(screen[i] == '*' || screen[i] == '/') {
			screen[i] = screen[i] == '*' ? screen[i-1] * screen[i+1] : screen[i-1] / screen[i+1];
			screen.splice(i-1, 1);
			//splice at i since the previous splice lowers the arrays length
			screen.splice(i, 1);
			i--;
		} 
	}console.log(screen);

	for(var i = 0; i < screen.length; i++) {
		if(screen[i] == '+' || screen[i] == '-') {
			screen[i] = screen[i] == '+' ? 1*screen[i-1] + 1*screen[i+1] : 1*screen[i-1] - 1*screen[i+1];
			screen.splice(i-1, 1);
			screen.splice(i, 1);
			i--;
		}
	} console.log(screen);
}

var screen = [];
var text   = "";
var opMode = true;

$(function() {

	$("#clear").click(function() {
 		screen.length = 0;
 		$("#screen p").html("");
 	});
    
	$(".digit p").click(function() {
		if(!opMode) {
			screen[screen.length-1] += this.innerHTML;
			updateScreen();
		} else {
			screen.push(this.innerHTML);
			updateScreen();
			opMode = false;
		}
	});

	$(".op p").click(function() {
		if(!opMode) {
			screen.push(this.innerHTML);
			updateScreen();
			opMode = true;
		}
 	});

 	$("#equals").click(function() {
 		calculate();
 		updateScreen();
 	});

});