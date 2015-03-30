function solve(input){
    var bill = input[0],
        mood = input[1],
        change;

    var getFirstDigit = function(num) {
        var numLen = parseInt(('' + num).length)
        return parseInt(num / Math.pow(10, numLen - 1));
    }

    if(mood === 'happy')
    {
        change = (10 * bill) / 100;
    }
    else if(mood === 'married')
    {
        change = (0.05 * bill) / 100;
    }
    else if(mood === 'drunk')
    {
        change = (15 * bill) / 100;
        change = Math.pow(change, getFirstDigit(change));
    }
    else {
        change = (5 * bill) / 100;
    }

    console.log(change.toFixed(2));
}

var input = [
    716.00,
    'bored'
];

solve(input);
