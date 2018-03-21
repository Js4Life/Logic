function recursion(max,current) {
    if(current > max) {
        return
    }
    console.log(current);
    recursion(max,current+1);
}

recursion(6,1);