(function(){
    
    /**
     * Removes a given element from an array object.
     * @param {Number/String} value
     * @returns {Array|Array.prototype.removeItem.resultArray}
     */
    Array.prototype.removeItem = function( value ) {
        var resultArray = [];
        
        this.forEach( function( el ) {
            if( el !== value ){
                resultArray.push( el );
            }
        } );
        
        return resultArray;
    };
    
    /**
     * Presentation of the .removeItem() functionality:
     */
    
    console.log( "The method .removeItem removes all the 1's in this example: " );
    console.log( '\n' );
    
    arr = [ 1,2,1,3 ];
    console.log( "The array before .removeItem() is applied: " + arr.toString() );
    
    arr = arr.removeItem(1);
    console.log( "The array after .removeItem(1) is applied: " + arr.toString() );
    
}());