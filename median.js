function median(values) {
    values.sort(function(a,b){return a - b;});
   
    var half = Math.floor(values.length/2);

 
    if(values.length % 2) { 
       // return values[half]
      console.log(values[half])

      
    } else {
        console.log((values[half]+values[half-1])/2.0);
    }
}

var list2 = [1];

median(list2);