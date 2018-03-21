function grab(flag) {
        var index = process.argv.indexOf(flag);
        return (index === -1) ? null :process.argv[index + 1];    
}

var greeting = grab('--greeting');
var user = grab('--user');

if(!user || !greeting) {
    console.log('you blew it')
} else {
    console.log(`Welcome ${user} , ${greeting}`);
}















// console.log(process.argv);
// ubuntu@admin:~/Desktop/CS Algs/NodeJs$ node process.js  --user ubuntu --greeting 'hello world'
// [ '/usr/local/bin/node',
//   '/home/ubuntu/Desktop/CS Algs/NodeJs/process.js',
//   '--user',
//   'ubuntu',
//   '--greeting',
//   'hello world' ]