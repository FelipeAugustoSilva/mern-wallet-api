import express from 'express'; //importei o express, meu packeage está com type: module


const app = express(); // criando uma const app que executa o express


app.listen(5000, ()=> console.log("Server listening in port 5000")); // app.listen escuta a porta 5000 e impreme a mensagem no console