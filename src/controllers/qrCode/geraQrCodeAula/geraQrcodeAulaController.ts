import { Request, Response } from "express";
import { qrcodeConstants } from "../../../constants/qrcodeConstants";
import { BaseController } from "../../baseController";
import { GeraQrcodeAulaUseCase } from "../../../domain/useCases/geraQrcodeAula/geraQrcodeAulaUseCase";

export class GeraQrCodeAulaController extends BaseController {

    constructor(
        private geraQrcodeAulaUseCase: GeraQrcodeAulaUseCase
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const {codAula, codProfessor } = request.body;
        const qrCode = await this.geraQrcodeAulaUseCase.execute({
            codAula,
            codProfessor
        });
        response.type(qrcodeConstants.TIPO_IMAGE);
        qrCode.pipe(response);
        return response;
    }

}