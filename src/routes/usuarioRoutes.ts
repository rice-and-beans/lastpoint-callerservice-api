import { Router } from "express";
import { criarUsuarioController } from "../controllers/usuario/criarUsuario";

const router = Router();

router.post('/', (request, response) => {
    return criarUsuarioController.handle(request, response);
});

export { router as usuario };