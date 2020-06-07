const express = require("express")
const server = express()


//configurar pasta publica
server.use(express.static("public"))



//utilizanod template negine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// Configurar caminhos da minha aplicação
// Página inicial   
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
   return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})


// ligar o servidor //CTR + C INTERROMPE O SERVIDOR NO TERMINAL, ( USAR DENTRO DO TERMINAL !)
server.listen(3000)
