const { request, response } = require("express");
const express = require("express");

const app = express();

const usuarios = [];

//console.log(usuarios);

app.get('/usuarios', (request, response) => {
    response.json({usuarios })
})

app.post('/usuarios', (request, response) => {
    const usuario = {
        nome: "Felipe",
        sobrenome: "Borges",
    }
    usuarios.push(usuario);

    response.json({ usuario });
})

app.get('/produtos', (request, response) => {
    response.json({produtos: [] })
})
app.listen(3000, () => {
    console.log("Servidor Iniciado")
})