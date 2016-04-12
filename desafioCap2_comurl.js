var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function(request, response){
	response.writeHeader(200, {"Content-Type" : "text/html"});

	var result = url.parse(request.url, true);
	/*for (var key in result.query) {
		response.write("<h2>"+ key +":" + result.query[key] +"</h2>");
	}*/
	if (result.pathname == "/" || result.pathname == "/artigos"){
		if (fs.existsSync(__dirname + '/artigos.html')){
			fs.readFile(__dirname + '/artigos.html', function(erro, html){	
				response.end(html);
			});
		}
	} else if (result.pathname == "/contato"){
		if (fs.existsSync(__dirname + '/contato.html')){
			fs.readFile(__dirname + '/contato.html', function(erro, html){	
				response.end(html);
			});
		}
	} else {
		if (fs.existsSync(__dirname + '/erro.html')){
			fs.readFile(__dirname + '/erro.html', function(erro, html){	
				response.end(html);
			});
		}
	}
});

server.listen(3000,function(){
	console.log("Desafio Cap. 2 rodando...");
});