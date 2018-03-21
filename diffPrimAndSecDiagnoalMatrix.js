'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the diagonalDifference function below.
 */
function diagonalDifference(a) {
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0 ; i < a.length ; i++) {
        for(var j=0;j< a.length;j++){
            if(i==j){
                    sum1 += a[i][j];
                    
            }
            
            if(i == (a.length -1 - j)) {
                    sum2 += a[i][j];
            }
            
        }
        
    }
    
    // console.log(sum1);
    // console.log(sum2);
    console.log(Math.abs(sum2 - sum1));
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let a = Array(n);

    for (let aRowItr = 0; aRowItr < n; aRowItr++) {
        a[aRowItr] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    let result = diagonalDifference(a);

    ws.write(result + "\n");

    ws.end();
}
