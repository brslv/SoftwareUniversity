function solve(input) {

    var splittedInput = [],
        sys1,
        sys2,
        sys3,
        normandy,
        finalPoint;

    /**
     * Splitting the input
     */
    input.forEach(function (el) {
        splittedInput.push(el.split(' '));
    });

    finalPoint = Number(splittedInput[4][0]);
    /**
     * Instantiating the main objects
     */
    function System(name, centerX, centerY) {
        this.name = name.toLowerCase();
        this.centerX = centerX;
        this.centerY = centerY;
        this.left = this.centerX - 1;
        this.right = this.centerX + 1;
        this.top = this.centerY + 1;
        this.bottom = this.centerY - 1;
    }

    sys1 = new System(splittedInput[0][0], Number(splittedInput[0][1]), Number(splittedInput[0][2]));
    sys2 = new System(splittedInput[1][0], Number(splittedInput[1][1]), Number(splittedInput[1][2]));
    sys3 = new System(splittedInput[2][0], Number(splittedInput[2][1]), Number(splittedInput[2][2]));
    normandy = {
        centerX: Number(splittedInput[3][0]),
        centerY: Number(splittedInput[3][1])
    };

    /**
     * Checking current position function.
     */
    function printCurrentPos(pos) {
        var position = null;

        if(normandy.centerX <= sys1.right && normandy.centerX >= sys1.left &&
            pos >= sys1.bottom && pos <= sys1.top) {
                position = sys1.name;
        }

        if(normandy.centerX <= sys2.right && normandy.centerX >= sys2.left &&
            pos >= sys2.bottom && pos <= sys2.top) {
                position = sys2.name;
        }

        if(normandy.centerX <= sys3.right && normandy.centerX >= sys3.left &&
            pos >= sys3.bottom && pos <= sys3.top) {
                position = sys3.name;
        }

        if(!position) {
            position = 'space';
        }

        console.log(position);
    }

    /**
     * Starting to move.
     */
    for (var m = normandy.centerY; m <= normandy.centerY + finalPoint; m++) {
        printCurrentPos(Number(m));
    }
}

var input = [
    'star01 16 16',
    'star02 20 20',
    'star03 14.5 8',
    '15.5 16.1',
    '1'
];

solve(input);