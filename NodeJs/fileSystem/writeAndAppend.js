var fs = require('fs');

var md = `

Sample MarkDown title
===================================
*point
*point
`

fs.writeFile("sample.md",md.trim(),function(err){
        console.log('file created')
})