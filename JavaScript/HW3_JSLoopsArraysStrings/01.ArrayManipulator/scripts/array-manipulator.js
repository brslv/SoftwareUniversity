function solve(args){
	var resultContainer = document.getElementById('results');

	// Filter non-numbers
	var nums = args.filter(function(el){
		return !isNaN(el);
	});

	// Sort the nums array
	nums.sort(function(a, b){
		return a > b;
	});

	// Get the most frequent element in the array
	function getMostFreq(nums){
		var longestSeq = 0, currentSeq = 1, max;

		for(var i = 0; i < nums.length; i++){
			if(nums[i] === nums[i + 1]){
				currentSeq++;
				if(longestSeq < currentSeq){
					longestSeq = currentSeq;
					max = nums[i];
				}
			}else{
				currentSeq = 1;
			}
		}

		return max;
	}

	// Display results in the HTML
	resultContainer.innerHTML = "Min number: " + nums[0] + "<br />";
	resultContainer.innerHTML += "Max number: " + nums[nums.length - 1] + "<br/>";
	resultContainer.innerHTML += "Most frequent number: " + getMostFreq(nums) + "<br/>";
	resultContainer.innerHTML += "[" + nums + "]" + "<br/>";

	// Print results on the console.
	console.log("Min number: " + nums[0]);
	console.log("Max number: " + nums[nums.length - 1]);
	console.log("Most frequent number: " + getMostFreq(nums));
	console.log(nums);
}

var args = 
["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];

solve(args);