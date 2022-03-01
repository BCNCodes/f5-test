import express from 'express';
import imageRouter from './routes/imageRouter.js';
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/image', imageRouter);
export default app;