var fs = require('fs');

try {
    fs.unlinkSync('config.json')
} catch(err) {
    console.log(err)
}
fs.unlink('sample.json',function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log('sample md removed')
    }
})


// rename

// fs.renameSync('config','config.json')

// console.log('config json file renamed')

// fs.rename('sample.md','sample.json',function(err){
//     if(err){
//         console.log(err)
//     } else {
//         console.log('noted moved successfully')
//     }
// })