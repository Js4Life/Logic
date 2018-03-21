var fs = require('fs');
var path = require('path')


fs.readdir('../fileSystem',function(err,files){
        files.forEach(function(fileName){
            // console.log(fileName)
            // console.log(__dirname)
            var file = path.join(__dirname,'../fileSystem',fileName);
            var stats = fs.statSync(file)

            if(stats.isFile() && fileName !== ".DS_Store") {
                fs.readFile(file,'UTF-8',function(err,contents){
                    console.log(contents)
                })
            }
        }) 
})


// var contents = fs.readFile('./listfile.js','UTF-8',function(err,contents){
//     if(err){
//         console.log(err);
//     }
//     console.log(contents)
// })

