const express = require("express")
const server = express()

//configurar pasta publica
server.use(express.static("public"))


// Configurar caminhos da minha aplicação
// Página inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})

// ligar o servidor //CTR + C INTERROMPE O SERVIDOR NO TERMINAL, ( USAR DENTRO DO TERMINAL !)
server.listen(3000)
