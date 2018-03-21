function tuples(arr){
    var answers = [];
    for(var i=0;i<arr.length;i++){
       // console.log(arr[i]);
        for(var j=0;j<arr.length;j++){
         //   console.log(arr[i],arr[j]);
            answers.push([arr[i],arr[j]]);
        }
    }
    return answers;
}

console.log(tuples([1,2,3,4]));