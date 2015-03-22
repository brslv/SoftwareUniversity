(function(){
	
    function sortLetters( inputStr, bool ) {
        var letters = [];

        for( var l = 0; l < inputStr.length; l++ ) {
            letters.push( inputStr[l] );
        }

        letters.sort( function(let1, let2) {
            if( bool ) {
                return let1.toLowerCase() > let2.toLowerCase();
            } else {
                return let1.toLowerCase() < let2.toLowerCase();
            }
        } )

        return letters.join().replace( /,/g,'' );
    }

    /**
     * Inputs.
     */
    console.log( sortLetters( 'HelloWorld', true ) );
//	console.log( sortLetters( 'HelloWorld', false ) );
	
}());
