import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaUsuarioExiste } from "../../../validations/usuario/validaUsuarioExiste";
import { CriarUsuarioUseCase } from "./criarUsuarioUseCase";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioExiste = new ValidaUsuarioExiste(
    usuarioRepositoryImpl
);

const criarUsuarioUseCase = new CriarUsuarioUseCase(
    usuarioRepositoryImpl,
    validaUsuarioExiste,
);

export { criarUsuarioUseCase }