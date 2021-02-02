import express from 'express';

const app = express();

app.use(express.json());

// GET:Buscar ou listar um informação
// POST: Criar alguam informação
// PUT: Atualizar uma informação existente
// DELETE: Deltetar uma informação existente

// corpo ( request body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, odenação

app.get('/', (request, response) => {
    return response.json({message: 'Hello World'});

});

app.listen(3333);