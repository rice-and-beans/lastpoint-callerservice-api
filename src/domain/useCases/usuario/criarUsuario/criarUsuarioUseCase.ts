import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { ICriarUsuarioRequestDTO } from "../../../model/criarUsuarioDTO";

export class CriarUsuarioUseCase {
    constructor(
        private usuarioRepository: IUsuarioRepository
    ){}
    async execute(data: ICriarUsuarioRequestDTO){
        const usuarioRecuperado = await this.usuarioRepository.buscarPorEmail(data.email);

        if(usuarioRecuperado){
            throw new Error('Usuario já existe');
        }

        const usuario = new Usuario(data);
        await this.usuarioRepository.salvar(usuario);
    }
}