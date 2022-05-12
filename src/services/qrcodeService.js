const qr = require('qr-image');

module.exports = {
    async criarQRCode() {
        const url = qrcodeConsts.URL_CHAMADA;
        const code = qr.image(url, {type: qrcodeConsts.TIPO_IMAGE});
        return code;
    }
}