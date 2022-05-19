import { Request, Response } from "express";
import { CriarUsuarioUseCase } from "../../../domain/useCases/usuario/criarUsuario/criarUsuarioUseCase";

export class CriarUsuarioController {
    constructor(
        private criarUsuarioUseCase: CriarUsuarioUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
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