import { Request, Response } from "express";
import { qrcodeConstants } from "../../../constants/qrcodeConstants";
import { GeraQrcodeAulaUseCase } from "../../../domain/useCases/geraQrcodeAula/geraQrcodeAulaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class GeraQrCodeAulaController extends BaseControllerAuth {

    constructor(
        private geraQrcodeAulaUseCase: GeraQrcodeAulaUseCase
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const token = request.headers['x-access-token'] as string;
        const {codAula, codProfessor } = request.body;
        const qrCode = await this.geraQrcodeAulaUseCase.execute({
            codAula,
            codProfessor,
            token
        });
        response.type(qrcodeConstants.TIPO_IMAGE);
        qrCode.pipe(response);
        return response;
    }

}