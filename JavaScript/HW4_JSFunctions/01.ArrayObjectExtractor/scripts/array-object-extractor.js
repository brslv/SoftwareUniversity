var arr = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];

function extractObjects(arr){
	var resultArr = [];
	
	arr.forEach(function(el){
		var currentEl = el.toString();
		
		if(currentEl[0] === "["){
			resultArr.push(el);
		}
	});
	
	return resultArr.toString() ? resultArr : 'Empty array, bro!';
}

console.log(extractObjects(arr));

extractObjects(arr);