var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

var skierTerms = [ 
    {
    term:'Rip',
    defined: 'To move at a high rate of speed'
},
{
    term:'Huck',
    defined: 'To move at a high rate of speed'
},
{
    term:'Chowder',
    defined: 'To move at a high rate of speed'
},
{
    term:'Raghu',
    defined: 'To move at a high rate of speed'
}
]

app.use(function(req,res,next) {
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
 next();


})

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api",function(req,res){
    res.json(skierTerms); 
})

app.post("/dictionary-api", function(req, res) {
    skierTerms.push(req.body);
    res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;