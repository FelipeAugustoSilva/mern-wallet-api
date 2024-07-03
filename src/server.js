import express, { json } from 'express'; //importei o express, meu packeage está com type: module
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/database.js";

connectDb();


const app = express(); // criando uma const app que executa o express

app.use(json());
app.use(authRouter);


app.listen(5000, ()=> console.log("Server listening in port 5000")); // app.listen escuta a porta 5000 e impreme a mensagem no console