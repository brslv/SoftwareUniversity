(function(){
    
    function solve(args){
        var a = args[0],
            b = args[1],
            c = args[2],
            x1,
            x2,
            d = Math.sqrt(b * b - 4 * a * c),
            denominator = 2 * a;
    
        x1 = (-b - d) / denominator;
        x2 = (-b + d) / denominator;
        
        if(x1 === x2){
            console.log('x = ' + x1);
        }
        else if(isNaN(x1) || isNaN(x2)){
            console.log('No real roots');
        }
        else{
            console.log('x1 = ' + x1);
            console.log('x2 = ' + x2);
        }
    }
    
    /**
     * You can use the example inputs from the array
     * args. Just change the index in solve(args[index])
     * to test the application.
     */
    args = [[2, 5, -3], [2, -4, 2], [4, 2, 1]];
    
    solve(args[0]);
    
}());