var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
    if(req.method === "GET") {
            res.writeHead(200,{"Content-Type" : "text/html"});
             fs.createReadStream("./public/form.html","UTF-8").pipe(res);
    } else  if(req.method === "POST"){
        var body = "";
        req.on("data",function(chunk) {
            body += chunk
        })
        req.on("end" , function() {
            res.writeHead(200,{"Content-Type": "text/html"});
            res.end(`
            <!DOCTYPE><html>
            <p>${body}</p>}           
            </html>
            `)
        })
    }


}).listen(3000);

console.log('form server is running at port 3000');