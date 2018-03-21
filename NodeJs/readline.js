var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
var fs= require('fs')
var realPerson = {
    name: '',
    sayings: []
}

rl.question('what is the name of a real person',function(answer) {
    realPerson.name =answer; 
    fs.writeFileSync(realPerson.name + ".md" , `${realPerson.name}\n ===========\n\n`)
    rl.setPrompt(`what would ${realPerson.name} say ?`);
   rl.prompt();
    rl.on('line',function(sayings) {
        realPerson.sayings.push(sayings.trim())
        fs.appendFile(realPerson.name + ".md",`${sayings.trim()}\n`)
        if(sayings.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
             rl.setPrompt(`what else would ${realPerson.name} say ? ('exit' to leave)`)
            rl.prompt();
        }
rl.on('close',function() {
    console.log('%s is a real person that says %j',realPerson.name,realPerson.sayings);
    process.exit()
})

       
           // console.log(sayings.trim());
    })
    // console.log(answer);
})