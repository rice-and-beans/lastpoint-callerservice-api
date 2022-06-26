import { Request, Response } from "express";
import { RealizaChamadaUseCase } from "../../../domain/useCases/realizarChamadaQrcode/realizaChamadaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class RealizaChamadaQrCodeController extends BaseControllerAuth {

    constructor(
        private realizaChamadaUseCase: RealizaChamadaUseCase
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const token = request.headers['x-access-token'] as string;
        const { codUsuario, chaveAula } = request.body;
        await this.realizaChamadaUseCase.execute({
            codUsuario,
            chaveAula,
            token
        });
        return response.status(200).send();
    }

}