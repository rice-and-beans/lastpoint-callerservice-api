const qrcodeService = require('../services/qrcodeService.js');
const qrcodeConsts = require('../constants/qrcodeConts.js');

exports.post = async (req, res) =>{
    const qrCode = await qrcodeService.criarQRCode();
    res.type(qrcodeConsts.TIPO_IMAGE);
    qrCode.pipe(res);
};