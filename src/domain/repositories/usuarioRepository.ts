import { Usuario } from "../../data/entities/usuario";

export interface IUsuarioRepository {
    buscarPorEmail(email: string): Promise<Usuario>;
    salvar(Usuario: Usuario);
}