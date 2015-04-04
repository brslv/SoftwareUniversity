(function(){

	/**
	 * Checks if an object contains a given key.
	 * Use: objectHasKey(obj, key);
         * @param  {[Object]} obj
	 * @param  {[string]}  key [description]
	 * @return {Boolean}     [description]
	 */
	var objectHasKey = function(obj, key) {
		return key in obj;
	};
        
        /**
         * Sorts object by it's properties.
         * Specify ascending or descending order as a second argument.
         * Use: sortObjectByKeys(obj, [order]);
         * @param {Object} obj
         * @param {string} order ['asc'/'desc'/empty]
         * @returns {Object} [Sorted object by it's properties]
         */
        var sortObjectByKeys = function(obj, order) {
            if(order !== 'asc' && order !== 'desc') order = 'asc';
            
            var keys = [],
                    key,
                    resultObj = {};
            
            for(key in obj) {
                keys.push(key);
            }
            
            keys = keys.sort(function(a, b){
                if(order === 'asc')
                    return a > b;
                else 
                    return a < b;
            });
            
            keys.forEach(function(el){
                resultObj[el] = obj[el];
            });
            
            return resultObj;
        };
        
        /**
         * Sorts a given object by it's values.
         * Specify ascending or descending order as a second argument.
         * Use: sortObjectByValues(obj, order);
         * @param {Object} obj
         * @param {string} order 'asc'/'desc'/empty
         * @returns {Object} Sorted object by it's values
         */
        var sortObjectByValues = function(obj, order) {
            if(!order || (order !== 'asc' && order !== 'desc')) order = 'asc';
            
            var values = [],
                    key,
                    resultObj = {};
            
            for(key in obj) {
                values.push(obj[key]);
            }
            
            values = values.sort(function(a, b){
                if(order === 'asc') {
                    return a > b;
                } else {
                    return a < b;
                }
            });

            values.forEach(function(el){
                for(var i in obj) {
                    if(obj[i] === el) {
                        resultObj[i] = el;
                    }
                }
            });
            
            return resultObj;
        };
}());