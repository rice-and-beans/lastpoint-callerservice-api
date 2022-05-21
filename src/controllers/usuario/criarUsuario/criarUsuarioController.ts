import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { CriarUsuarioUseCase } from "../../../domain/useCases/usuario/criarUsuario/criarUsuarioUseCase";

export class CriarUsuarioController extends BaseController {

    constructor(
        private criarUsuarioUseCase: CriarUsuarioUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, email, senha, tipo } = request.body;
        await this.criarUsuarioUseCase.execute({
            codigo,
            nome,
            email,
            senha,
            tipo
        });
        return response.status(201).send();
    }

}