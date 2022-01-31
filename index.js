const { request, response } = require("express");
const express = require("express");

const app = express();

const usuarios = {
    nome: "Felipe",
    sobrenome: "Borges",
}

app.post('/usuarios', (request, response) => {
    response.json({usuarios})
})
app.get('/usuarios', (request, response) => {
    response.json({usuarios: [] })
})
app.get('/produtos', (request, response) => {
    response.json({produtos: [] })
})
app.listen(3000, () => {
    console.log("Servidor Iniciado")
})