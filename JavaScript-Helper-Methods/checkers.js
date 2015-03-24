(function() {

	/**
	 * Checker helpers
	 */

	/**
	 * Check if an object is a number, even if in a quotes;
	 * @param  {Object}  item
	 * @return {Boolean}
	 */
	var isNum = function(item) {
		return !isNaN;
	};


	/**
	 * Check if an object is a number
	 * @param  {Object}  item
	 * @return {Boolean}
	 */
	var isRealNum = function(item) {
		return Object.prototype.toString.call(item) === '[object Number]';
	};

	/**
	 * Check if an object is a string
	 * @param  {Object}  item
	 * @return {Boolean}
	 */
	var isString = function(item) {
		return Object.prototype.toString.call(item) === '[object String]';
	};

	/**
	 * Check if an object is an Object
	 * @param  {Object}  item
	 * @return {Boolean}
	 */
	var isObj = function(item) {
		return Object.prototype.toString.call(item) === '[object Object]';
	};

	/**
	 * Check if an object is an array
	 * @param  {Object}  item
	 * @return {Boolean}
	 */
	var isArray = function(item) {
		return Object.prototype.toString.call(item) === '[object Array]';
	};

	/**
	 * Define the type of a variable. Returns a string representation of the type.
	 * @param  {Object}  item
	 * @return {string}
	 */
	var defType = function(item) {
		return Object.prototype.toString.call(item).substr(8).slice(0, -1);
	};

}());