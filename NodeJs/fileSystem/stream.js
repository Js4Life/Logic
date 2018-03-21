var fs = require('fs');

var stream = fs.createReadStream('./writeAndAppend.js','UTF-8');

var data = "";

stream.once('data',function() {
    console.log('\n\n\n')
    console.log('started reading file')
    console.log('\n\n\n')
    
})



stream.on('data',function(chunk) {
    process.stdout.write(`chunk : ${chunk.length} |`)
    data += chunk;
})

stream.on('end',function() {
    console.log('\n\n\n')
    console.log(`Finished Reading ${data.length}`)
    console.log('\n\n\n')
})


// fs.readFile('./writeAndAppend.js',function(err,chatlog) {
//     console.log(`File read ${chatlog.length}`)
// })

// console.log('readind file')