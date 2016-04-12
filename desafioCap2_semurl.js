var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
	response.writeHeader(200, {"Content-Type" : "text/html"});

	if (request.url == "/" || request.url == "/artigos"){
		//a constante __dirname retorna o diretório raiz da aplicação
		fs.readFile(__dirname + '/artigos.html', function(erro, html){	
			response.write(html);
			response.end();
		});
	} else if (request.url == "/contato"){
		//a constante __dirname retorna o diretório raiz da aplicação
		fs.readFile(__dirname + '/contato.html', function(erro, html){	
			response.write(html);
			response.end();
		});
	} else {
		//a constante __dirname retorna o diretório raiz da aplicação
		fs.readFile(__dirname + '/erro.html', function(erro, html){	
			response.write(html);
			response.end();
		});
	}
});

server.listen(3000,function(){
	console.log("Desafio Cap. 2 rodando...");
});