(function(){
	
    var input = [
                    "Pesho",
                    4,
                    4.21,
                    { name : 'Valyo', age : 16 },
                    { type : 'fish', model : 'zlatna ribka' },
                    [ 1,2,3 ],
                    "Gosho",
                    { name : 'Penka', height: 1.65 }
                ];

    extractObj( input );

    function extractObj( input ) {
        input.forEach( function( x ) {
            if( x.toString()[0] === '[' ) {
                    console.log( x );
            }
        } );
    }
	
}());