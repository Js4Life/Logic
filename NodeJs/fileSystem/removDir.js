var fs = require('fs');

// fs.rmdir('./assets',function(err) {
//     if(err) {
//         throw err;
//     }
//     console.log('Assets Directory Removed')
// })
fs.readdir('./logs').forEach(function(fileName){
    fs.unlinkSync('./logs/',+fileName)
})
fs.rmdir('./logs',function(err) {
    if(err) {
        throw err;
    }
    console.log('logs Directory Removed')
})