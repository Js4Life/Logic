function CrossAdd(arr){
    var answers =[];
    for(var i=0;i<arr.length;i++){
        var goingUp = arr[i];
     //  console.log(goingUp);
        var goingDown = arr[arr.length-1-i];
     //   console.log(goingDown);
     answers.push(goingDown + goingUp);

    }
    return answers;
}


console.log(CrossAdd([1,2,3,7]));
