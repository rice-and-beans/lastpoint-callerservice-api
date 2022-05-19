import { criarUsuarioUseCase } from "../../../domain/useCases/usuario/criarUsuario";
import { CriarUsuarioController } from "../criarUsuario/criarUsuarioController";

const criarUsuarioController = new CriarUsuarioController(
    criarUsuarioUseCase
);

export { criarUsuarioController }