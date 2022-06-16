import { Request, Response } from "express";
import { RealizaChamadaUseCase } from "../../../domain/useCases/realizarChamadaQrcode/realizaChamadaUseCase";
import { BaseController } from "../../baseController";

export class RealizaChamadaQrCodeController extends BaseController {

    constructor(
        private realizaChamadaUseCase: RealizaChamadaUseCase
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { codUsuario, chaveAula } = request.body;
        await this.realizaChamadaUseCase.execute({
            codUsuario,
            chaveAula
        });
        return response.status(201).send();
    }

}