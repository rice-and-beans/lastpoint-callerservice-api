import express from 'express';
import { usuario } from './routes/usuarioRoutes';

const app = express();

app.use(express.json());
app.use('/usuario', usuario);

export { app }