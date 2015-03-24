(function(){
	
	/**
	 * Strings helpers
	 */
	
	/**
	 * Retruns a camelCase strin.
	 * Use: camel("Camel---__*2!case") // camelCase
	 * @param  {[string]}
	 * @return {[string]}
	 */
	var camel = function(str){
		var result = str.match(/[a-zA-Z]+/g);
		firstLetFirstWord = result[0].charAt(0).toLowerCase();
		firstLetSecWord = result[1].charAt(0).toUpperCase();
		return firstLetFirstWord + result[0].slice(1) + firstLetSecWord + result[1].slice(1);
	};

	console.log(camel("Camel---__*2!case"));

}());