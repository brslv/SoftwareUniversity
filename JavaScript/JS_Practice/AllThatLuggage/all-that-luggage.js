function solve(input) {
	var extracts = [],
		container = {},
		output = {},
		sortedLuggByName = [],
		sortedLuggByWeight = [],
		i,
		sorting;

	// Extracting each element of the input
	input.forEach(function(x) {
		var y = x.replace(/\.{0,}\*\.{0,}/g, '--');
		extracts.push(y.split('--'));
	});

	// Set the sorting
	sorting = extracts[extracts.length - 1][0];

	// Fill up the container
	for (i = 0; i < extracts.length - 1; i++) {
		var name = extracts[i][0],
			lugg = extracts[i][1],
			isFood = extracts[i][2],
			isDrink = extracts[i][3],
			isFrag = extracts[i][4],
			weight = Number(extracts[i][5]),
			transfer = extracts[i][6],
			type = (function() {
				if (isFood === 'true' && isDrink === 'false') {
					return 'food';
				} else if (isFood === 'false' && isDrink === 'true') {
					return 'drink';
				} else {
					return 'other';
				}
			})();

		if (!container[name]) container[name] = [];

		container[name].push({
			'luggName': lugg,
			'kg': weight,
			'fragile': isFrag,
			'type': type,
			'transferredWith': transfer
		});
	}

	// Sorting stuff
	for (var person in container) {
		container[person] = container[person].sort(function(a, b) {
			if(sorting === 'weight') {
				return a.kg > b.kg;
			} else if(sorting === 'luggage name') {
				return a.luggName > b.luggName;
			}
		});
	}

	// Generating output
	for (var c in container) {
		var details = {};

		container[c].forEach(function(x) {
			details[x.luggName] = {
				'kg': x.kg,
				'fragile': x.fragile,
				'type': x.type,
				'transferredWith': x.transferredWith
			};
		});

		output[c] = details;
	}

	console.log(JSON.stringify(output).replace(/"false"/g, false).replace(/"true"/g, true));

}

var input = [
	'Yana Slavcheva*rakiya*false*true*false*3.5*ATV',
	'Yana Slavcheva*vodka*false*true*false*1.5*backpack',
	'Yana Slavcheva*wine*false*true*false*2.7*ATV',
	'Yana Slavcheva*beer*false*true*false*7.2*ATV',
	'Yana Slavcheva*whiskey*false*true*false*0.5*backpack',
	'Kiko*socks*false*false*false*0.2*backpack',
	'Kiko*banana*true*false*false*3.2*backpack',
	'Kiko*sticks*false*false*false*1.6*ATV',
	'Kiko*glasses*false*false*true*3*ATV',
	'Manov*socks*false*false*false*0.3*ATV',
	'luggage name'
];

solve(input);