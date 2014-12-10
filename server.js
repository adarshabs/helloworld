var http =require("http");
http.createServer(function (req,res) {
res.writeHead(200,{'Content-Type':'application/json'})
res.end("[{ID: 1, Name: 'test'},{ID: 2, Name: 'test2'}]");
}).listen(process.env.PORT,process.env.IP);