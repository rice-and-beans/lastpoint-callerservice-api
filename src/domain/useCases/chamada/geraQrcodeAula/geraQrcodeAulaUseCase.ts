import { qrcodeConstants } from "../../../../constants/qrcodeConstants";
import { geraQrCodeRequestDTO } from "../../../model/geraQrCodeDTO";
import * as qr from "qr-image";

export class GeraQrcodeAulaUseCase {

    constructor(
    ){}

    async execute(data: geraQrCodeRequestDTO){
        const url = qrcodeConstants.URL_CHAMADA;
        const code = qr.image(url, {type: qrcodeConstants.TIPO_IMAGE});
        return code;
    }

}