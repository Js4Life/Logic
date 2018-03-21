function fibo(n) {
    if(n<=2){
        return 1;
    } else {
        return fibo(n-1) + fibo(n-2);
    }
}

// console.log(fibo(10));

for(var i=1;i<=20;i++) {
    console.log(`${i}.${fibo(i)}`);
}