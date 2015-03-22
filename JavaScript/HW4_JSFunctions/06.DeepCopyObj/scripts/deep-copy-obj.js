(function(){
    
    /**
     * Returns a clonned object.
     * @returns {Object}
     */
    Object.prototype.clone = function() {
        return JSON.parse(JSON.stringify(this));
    };
    
    /**
     * Compares objects by reference.
     * @param {Object} a
     * @param {Object} b
     * @returns {String}
     */
    function compareObj( a, b ) {
        return "a == b ---> " + (a == b);
    }
    
    /**
     * Examples
     */
    var obj1 = { a: 1, b: { c: {d: 2}, e: 3}};
    var obj2 = obj1.clone(); // deep copy
    var obj3 = obj1;        // not so deep copy :))
    
    console.log( compareObj( obj1, obj2 ) );
    console.log( compareObj( obj1, obj3 ) );
}())