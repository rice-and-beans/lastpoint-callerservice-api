const qrcodeService = require('../services/qrcodeService.js');

exports.post = async (req, res) =>{
    const qrCode = await qrcodeService.criarQRCode();
    return qrCode;
};