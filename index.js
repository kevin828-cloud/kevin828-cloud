const http = require('http');

function kevin(req, res){
    res.write("hello kevin");
    res.end();
}

http.createServer(kevin).listen(4500);