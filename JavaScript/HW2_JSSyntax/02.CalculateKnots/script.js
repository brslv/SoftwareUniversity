(function(){
    
    function solve(kmh) {
        console.log((kmh * 0.539956803).toFixed(2));
    }
    
    /**
     * You can use the example inputs from the array
     * kmhs. Just change the index in solve(kmhs[index])
     * to test the application.
     */
    var kmhs = [20, 112, 400];
    
    solve(kmhs[2]);
    
}());