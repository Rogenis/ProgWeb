

var filesystem = require('fs')
var http = require('http');

var folderName = process.argv[2];
var arquivos = filesystem.readdirSync(folderName);

var server = http.createServer(function(req, res){
  res.end(arquivos.join("\n"));
});

server.listen(3000);