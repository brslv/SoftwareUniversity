var args = [
	["HelloWorld", true],
	["HelloWorld", false],
];

var str = args[0][0], 
	bool = args[0][1];
	
function sortLetters(str, bool){
	
	var letters = [], resultStr = '';
	
	for(var i = 0; i < str.length; i++){
		letters.push(str[i]);
	}
	
	letters.sort(function(a, b){
		if(bool){
			return a.toLowerCase() > b.toLowerCase();
		}
		else{
			return a.toLowerCase() < b.toLowerCase();
		}
	});
	
	resultStr = letters.join("");
	return resultStr;
}

console.log(sortLetters(str, bool));