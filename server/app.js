import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
// app.use(cors);
//app.use(express.static('images'));

app.get('/', (req, res) => res.json({result:'Hello World!'}));
app.get('/images/:id',(req,res)=> res.sendFile('foca.svg',{root:'./images'}));
export default app;