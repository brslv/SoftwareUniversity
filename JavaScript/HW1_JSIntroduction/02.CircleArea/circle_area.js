function calcCircleArea(r){
	var result = Math.PI * r * r;
	return result;
}

var resultBox = document.getElementById('result-box');
var resultElement = document.createElement('p');
resultElement.innerHTML = 'r = 7; area = ' + calcCircleArea(7) + '<br />' 
						+ 'r = 1.5; area = ' + calcCircleArea(1.5) + "<br />" 
						+ 'r = 20; area = ' + calcCircleArea(20);
resultBox.appendChild(resultElement);