import { Request, Response } from "express";
import { qrcodeConstants } from "../../../../constants/qrcodeConstants";
import { BaseController } from "../../../BaseController";
import { GeraQrcodeAulaUseCase } from "../../../../domain/useCases/chamada/geraQrcodeAula/geraQrcodeAulaUseCase";

export class GeraQrcodeAulaController extends BaseController {

    constructor(
        private geraQrcodeAulaUseCase: GeraQrcodeAulaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const {aulaId, professorId } = request.body;
        const qrCode = await this.geraQrcodeAulaUseCase.execute({
            aulaId,
            professorId
        });
        response.type(qrcodeConstants.TIPO_IMAGE);
        qrCode.pipe(response);
        return response;
    }

}