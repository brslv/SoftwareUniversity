function solve(args){
	// Filter
	args = args.filter(function(el){
		return el > 0 && el < 400;
	});

	// Map
	args = args.map(function(el){
		return el - (el * 20 / 100);	
	});

	// Sort
	args = args.sort(function(a, b){
		return a > b;
	});

	// Print
	console.log(args);

	document.getElementById('results').innerHTML = "[" + args + "]";
}

var args = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
solve(args);