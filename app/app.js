import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import './src/database.js';
import "dotenv/config";
import authRouter from "./src/routes/auth.route.js"

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});
