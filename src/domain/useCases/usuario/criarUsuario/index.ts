import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { CriarUsuarioUseCase } from "./criarUsuarioUseCase";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const criarUsuarioUseCase = new CriarUsuarioUseCase(
    usuarioRepositoryImpl
);

export { criarUsuarioUseCase }