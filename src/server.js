import express, { json } from 'express'; //importei o express, meu packeage está com type: module
import authRouter from "./routes/authRoutes.js";
import { connectDb } from "./config/database.js";

connectDb();


const app = express(); // criando uma const app que executa o express

app.use(json());
app.use(authRouter);

//instalei p npm i dotenv
//cria o arquivo .env
const port = process.env.PORT
app.listen(port, ()=> console.log(`Server listening in port ${port}`)); // app.listen escuta a porta 5000 e impreme a mensagem no console