import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { ICriarUsuarioRequestDTO } from "../../../model/criarUsuarioDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaUsuarioExiste: ValidacaoBase,
    ){}

    async execute(data: ICriarUsuarioRequestDTO){
        await this.validaUsuarioExiste.valida(data);
        const usuario = new Usuario(data);
        await this.usuarioRepository.salvar(usuario);
    }

}