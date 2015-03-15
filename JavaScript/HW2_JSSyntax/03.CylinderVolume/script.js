(function(){
    
    function solve(args){
        
        function calcCylinderVol(args){
            var radius = args[0],
                height = args[1];
            return (Math.PI * radius * radius * height).toFixed(3);
        }
        
        console.log(calcCylinderVol(args));
        
    }
    
    /**
     * You can use the example inputs from the array
     * args. Just change the index in solve(args[index])
     * to test the application.
     */
    args = [[2, 4], [5, 8], [12, 3]];
    
    solve(args[0]);
    
}());