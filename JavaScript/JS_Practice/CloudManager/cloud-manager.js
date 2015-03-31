function solve(input) {

    var splittedInput = [],
        result = {},
        sortedKeys = [],
        output = {};

    /**
     * Processing the input.
     */
    input.forEach(function(el){
        var row = el.split(' ');
        //row[1] = row[1].substring(1); // remove .
        row[2] = row[2].substring(0, row[2].length - 2); // remove MB
        row[2] = Number(row[2]);
        splittedInput.push(row);
    });

    /**
     * Getting the keys of the result object.
     */
    splittedInput.forEach(function(el){
        var fileName    = el[0],
            ext         = el[1];

        if(!result[ext]){
            result[ext] = {
                files: [],
                memory: 0
            };

            sortedKeys.push(ext);
            sortedKeys.sort();
        }
    });

    /**
     * Filling up the result object.
     */
    splittedInput.forEach(function(el){
        var fileName   = el[0],
            ext        = el[1],
            size       = el[2];

        result[ext].files.push(fileName);
        result[ext].files.sort(); // sorting fileNames
        result[ext].memory += size; // adding sizes
    });

    sortedKeys.forEach(function(el){
        output[el] = {
            files : result[el].files,
            memory : result[el].memory.toFixed(2)
        }
    });

    console.log(JSON.stringify(output));

}

var input = [
    'sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB'
];

var input2 = [
    'eclipse .tar.gz 198.00MB',
    'uTorrent .gyp 33.02MB',
    'nodeJS .gyp 14MB',
    'nakov-naked .jpeg 3MB',
    'gnuGPL .pdf 5.6MB',
    'skype .tar.gz 66MB',
    'selfie .jpeg 7.24MB',
    'myFiles .tar.gz 783MB'

];

solve(input);