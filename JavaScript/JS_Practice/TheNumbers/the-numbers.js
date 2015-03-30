function solve(input) {

    var nums = input[0].match(/\d+/g),
        output = [];

    var toHex = function(num) {
        return num.toString(16).toUpperCase();
    };

    var putZeroes = function(num) {
        var zeroes,
            result;

        if(len(num) < 4) {
            zeroes = 4 - len(num);
            result = '';

            for(var i = 0; i < zeroes; i++) {
                result += '0';
            }

            result += num.toString();
            num = result;
        }

        return num;
    }

    var prefix = function(num) {
        return '0x' + num;
    }

    var len = function(hexNum) {
        return hexNum.length;
    }

    /**
     * Iterate through every extracted number
     * and perform the needed operations.
     */
    nums.forEach(function(num){
        num = toHex(parseInt(num));
        num = putZeroes(num);
        num = prefix(num);
        output.push(num);
    });

    /**
     * Join the numbers and print them.
     */
    console.log(output.join('-'));
}

var input = ['482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312'];

solve(input);