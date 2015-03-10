var userInput = parseInt(prompt('Enter a number to be converted to hexadecimal.'));
if(userInput){
	var hexUserInput = userInput.toString(16);
	alert('The number ' 
			+ userInput 
			+ ' represented in hexadecimal format is: ' 
			+ hexUserInput);
}