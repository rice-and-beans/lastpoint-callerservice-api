const express = require('express');
const cors = require('cors');
const server = express();

var qrCodeRouter = require('./src/routers/qrcodeRouter');

server.use(cors());
server.use(express.json());

server.use('/qrcode', qrCodeRouter);

server.listen(3000, () =>{
    console.log("Servidor Iniciado...");
})