(function() {

	/**
	 * Numbers helpers
	 */

	/**
	 * Returns the hexadecimal representation of a given number.
	 * Use: toHex(10);
	 * @param  {Number} num [description]
	 * @return {string}     [description]
	 */
	var toHex = function(num) {
		return num.toString(16).toUpperCase();
	};

	/**
	 * Returns the decimal representation of a given hexadecimal string.
	 * Use hexToNum(AB);
	 * @param  {string} hex
	 * @return {Number}     [description]
	 */
	var hexToNum = function(hex) {
		return parseInt(hex, 16);
	};

	/**
	 * Returns a random number between min (inclusive) and max (exclusive).
	 * Use: getRand(5,10);
	 * 		Math.rount(getRand(5,10));
	 * @param  {Number} min 
	 * @param  {Number} max
	 * @return {Number}    
	 */
	var getRand = function(min, max) {
	    return Math.random() * (max - min) + min;
	};

	console.log(Math.round(getRand(5,10)));
}());