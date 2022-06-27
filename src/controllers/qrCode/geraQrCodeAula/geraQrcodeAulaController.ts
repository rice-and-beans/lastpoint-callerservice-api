import { Request, Response } from "express";
import { qrcodeConstants } from "../../../constants/qrcodeConstants";
import { GeraQrcodeAulaUseCase } from "../../../domain/useCases/geraQrcodeAula/geraQrcodeAulaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";
const fs = require('fs');

export class GeraQrCodeAulaController extends BaseControllerAuth {

    constructor(
        private geraQrcodeAulaUseCase: GeraQrcodeAulaUseCase
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const token = request.headers['x-access-token'] as string;
        const codAula = request.query.codAula as string;
        const codProfessor = request.query.codProfessor as string;

        const qrCode = await this.geraQrcodeAulaUseCase.execute({
            codAula,
            codProfessor,
            token
        });
        response.type(qrcodeConstants.TIPO_IMAGE);
        qrCode.pipe(response);
        qrCode.pipe(fs.createWriteStream("../lastpointApp/src/uploads/qrcode.png"));
        return response;
    }

}