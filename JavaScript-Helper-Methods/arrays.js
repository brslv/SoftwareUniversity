(function(){

	/**
	 * Helper functions and methods
	 * Arrays
	 */

	/**
	 * Deletes from array all the elements, matching the element given as param.
	 * Use: array.deleteFirst(item);
	 * @param  {[Number/string/boolean]} delItem 
	 * @return {[]}
	 */
	Array.prototype.deleteAll = function(delItem) {
	    for( var i = 0; i < this.length; i++ ){
	        if( this[i] === delItem ) {
	            this.splice(i, 1);
	            i--;
	        }
		}

	    return this;
	};

	/**
	 * Deletes from an array the first element, matching the element given as param. 
	 * Use: array.deleteFirst(item)
	 * @return {[]}
	 */
	Array.prototype.deleteFirst = function(delEl) {
		for( var i = 0; i < this.length; i++ ) {
			if( this[i] === delEl ) {
				this.splice(i, 1);
				break;
			}
		}

		return this;
	};

	/**
	 * Swaps the positions of two elements in array.
	 * @param  {Number/string} first 
	 * @param  {Number/string} sec   
	 * @return {[]}       
	 */
	Array.prototype.swap = function(first, sec) {
		var temp = this[first];
		this[first] = this[sec];
		this[sec] = temp;
		return this;
	};

	/**
	 * Counts every element and returns an object,
	 * containing the occurance of each element in the array,
	 * as well as a property `most`, containing the most frequent element.
	 * Use: arr.frequency() // { element1: freq, element2: freq, most: element1 }
	 * 		arr.frequency().most => the most frequent element 
	 * @return {[]} 
	 */
	Array.prototype.frequency = function() {
		var freq = {};
		this.forEach(function(el){
			if(freq.hasOwnProperty(el)){
				freq[el] += 1;
			}else{
				freq[el] = 1;
			}
		});

		var maxCount = Number.MIN_VALUE;
		for(var el in freq){
			if(freq[el] > maxCount){
				maxCount = freq[el];
				freq.most = el;
			}
		}

		return freq;
	};

	/**
	 * Returns how many time a specific element occurs in an array.
	 * Use: arr.occurance(someElement);
	 * @param  {Number/string} elem 
	 * @return {Number}      
	 */
	Array.prototype.occurance = function(elem) {
		var occ = 0;
		this.forEach(function(x){
			if(x === elem){
				occ++;
			}
		});

		return occ;
	};

	/**
	 * Drops the first n elements (given as an argument to the method).
	 * Use: arr.drop(n);
	 * @param  {Number} dropCount
	 * @return {[]}          
	 */
	Array.prototype.drop = function(dropCount) {
		var result = [];

		for(var i = dropCount; i < this.length; i++) {
			result.push(this[i]);
		}

		return result;
	};

	a = [1,2,3,4];

	/**
	 * Drops the last n elements (given as an argument to the method).
	 * Use: arr.dropEnd(n);
	 * @param  {Number} dropCount
	 * @return {[]}          
	 */
	Array.prototype.dropEnd = function(dropCount) {
		var result = [];

		for(var i = 0; i < this.length - dropCount; i++) {
			result.push(this[i]);
		}

		return result;
	};

	/**
	 * Removes all the string values from an Array.
	 * Provide `true` if you want to skip string numbers (e.g. "12", "5"...).
	 * Provide `false` if you want to remove all the strings, even string numbers.
	 * @param  {Boolean} skipNums
	 * @return {[]}         
	 */
	Array.prototype.deString = function(skipNums) {
		var result = []; 

		this.forEach(function(x){
			if(skipNums){
				if(!isNaN(x))
					result.push(x);
			} else {
				if(Object.prototype.toString.call(x) !== '[object String]')
					result.push(x);
			}
		});

		return result;
	};

	/**
	 * Merges two arrays.
	 * You can provide a boolean value to specify if you want the method to check 
	 * elements for uniqueness. 
	 * Use: arr.merge([1,2,5,6,10], false/true);
	 * @param  {[]} anotherArray
	 * @param  {Boolean} uniqueValues
	 * @return {[]}             
	 */
	Array.prototype.merge = function(anotherArray, uniqueValues) {
		var result = [];

		uniqueValues = Object.prototype.toString.call(uniqueValues) === '[object Boolean]' ? uniqueValues : true;
		anotherArray = Object.prototype.toString.call(anotherArray) === '[object Array]' ? anotherArray : [];

		result = this.splice(0);

		anotherArray.forEach(function(y){
			if(uniqueValues){
				var isUnique = true;

				result.forEach(function(z){
					if(z === y) {
						isUnique = false;
					}
				});

				if(isUnique)
					result.push(y);
			} else {
				result.push(y);
			}
		});

		return result;
	};

	/**
	 * Returns a object, constructed from two arrays.
	 * The first array-argument is the keys and the second - the values.
	 * Return false if the two given arrays are not the same length.
	 * Use: packObj(['Bobi', 'Drobi', 'Jani'], [10, 20, 'Babani']);
	 * @param  {[]} keys   [This will be the values of the returned object]
	 * @param  {[]} values [This will be the keys of the returned object]
	 * @return {[type]}        [Return false if the two given arrays are not the same length]
	 */
	var packObj = function(keys, values) {
		var result = {};

		if(keys.length === values.length){
			for(var i = 0; i < keys.length; i++) {
				result[keys[i]] = values[i];
			}

			return result;
		}

		return false;
	};

}());
