(function(){
    
    function solve(input){
        
        console.log( 'The input values are: ' + input.toString() );
        console.log( '\n' );
        
        /**
         * Printing the head of the table.
         */
        console.log( '<table>' );
        console.log( '<tr><th>Price</th><th>Trend</th></tr>' );
        
        /**
         * The body of the table.
         */
        for( var p = 0; p < input.length; p++ ) {
            var trend,
                currentPrice = input[0],
                lastPrice;
            
            if( p === 0 ) trend = '<img src="fixed.png"/>';
            
            if( p > 0 ) {
                currentPrice = input[p].toFixed(2);
                lastPrice = input[p - 1].toFixed(2);
                
                if( currentPrice > lastPrice ){
                    trend = '<img src="up.png"/>';
                }else if( currentPrice < lastPrice ){
                    trend = '<img src="down.png"/>';
                }else{
                    trend = '<img src="fixed.png"/>';
                }
            }
            
            console.log( '<tr><td>' + currentPrice + '</td><td>' + trend + '</td>');
        }
        
        /**
         * The bottom of the table.
         */
        console.log( '</table>' );
        
    }
    
    /**
     * Input values.
     */
    var input = [   36.333,
                    36.5,
                    37.019,
                    35.4,
                    35,
                    35.001,
                    36.225
                ];
    solve(input);
    
}());