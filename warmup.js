var my_max = function(numbers) {
	var max = numbers[0];
	for(var i = 1; i < numbers.length; i++) {
		max = numbers[i] > max ? numbers[i] : max;
	}
	return max;
}

var vowel_count = function(string) {
	var num_vowels = 0;
	vowels = ["a","e","i","o","u"];
	for(var i = 0; i < string.length; i++){
		if(vowels.indexOf(string[i].toLowerCase()) > -1) num_vowels++;
	} 
	return num_vowels;
}

var reverse = function(string) {
	return string.split("").reverse().join("");
}