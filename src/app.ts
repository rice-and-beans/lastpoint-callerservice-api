import express from 'express';
import { chamada } from './routes/chamadaRoutes';

const app = express();

app.use(express.json());
app.use('/chamada', chamada);

export { app }