import { prismaClient } from "../database/prismaClient";
import { IUsuarioRepository } from "../../domain/repositories/usuarioRepository";
import { Usuario } from "../entities/usuario";

export class UsuarioRepositoryImpl implements IUsuarioRepository {
    async buscarPorEmail(email: string): Promise<Usuario>{
        const usuario = await prismaClient.usuario.findUnique({
            where:{
                email: email
            }
        })
        return usuario != null ? new Usuario(usuario) : usuario;
    }
    async salvar(usuario: Usuario){

    }
}