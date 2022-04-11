import express,{ Express , Request , Response } from "express";
import dotenv from 'dotenv'

// configuration the .env file
dotenv.config();

//create Express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Define the first Route of Appp
app.get('/',(req: Request,res:Response) =>{
    //Send Hello World
    res.send('Welcome to API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose')
})


app.get('/hello',(req: Request,res:Response) =>{
    //Send Hello World
    res.send('Hello world')
})

// Execute APP and listen Requests to PORT
app.listen(port, ()=>{
    console.log(`Express Server: Running at http://localhost:${port}`)
})