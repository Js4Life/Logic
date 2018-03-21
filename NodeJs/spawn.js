var sayings = [
    'you may delay,but time will not',
    'tell me and i forget,teach me and i remember,involve me and i learn',
    'it takes many good deeds to build a good reputation and only one bad one to lose it',
]

var interval = setInterval(function() {
    var i = Math.floor(Math.random()*sayings.length);
    process.stdout.write(`${sayings[i]} \n`)
},1000)

process.stdout.on('data',function(data){
    console.log(`STDIN Data Received -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
})