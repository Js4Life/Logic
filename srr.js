
var arr = [1,2,3,4,5,6];

function ds(arr) {

    for(var i=0;i<arr.length-1;i++) {

        console.log(arr[i])
        // console.log(arr[i])
        if(arr[i] == 4) {
               console.log('true')
        } else {
         console.log('false');
        }
    }
}

console.log(ds(arr))