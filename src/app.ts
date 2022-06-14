import express from 'express';
import { qrcode } from './routes/qrcodeRoutes';

const app = express();

app.use(express.json());
app.use('/qrcode', qrcode);

export { app }