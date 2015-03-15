(function(){
    function solve(args){
        
        var start,
            end,
            fibNums,
            rowCounter,
            isFib;

        start = args[0];
        end = args[1];
        fibNums = [];
        
        // Generate the fibNums array.
        var a = 1, b = 1, c = 0;
        for(var i = 0; i < 29; i++ ){
            c = a + b;
            fibNums[i] = c;
            a = b;
            b = c;
        }
        
        rowCounter = start;
        console.log('<table>');
        console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
        for (var i = 1; i <= (end - start) + 1; i++) {
            isFib = fibNums.indexOf(rowCounter) > -1 ? 'yes' : 'no';
            console.log('<tr><td>' + rowCounter + '</td>' + 
                        '<td>' + rowCounter * rowCounter + '</td>' +
                        '<td>' + isFib + '</td></tr>');
            rowCounter++;
        }
        console.log('</table>');
    
    }
    
    /**
     * You can use the example inputs from the array
     * args. Just change the index in solve(args[index])
     * to test the application.
     */
    var args = [[2, 6], [55, 56]];
    
    solve(args[0]);
}());