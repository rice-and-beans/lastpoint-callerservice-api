import { Router } from "express";
import { criarUsuarioController } from "../controllers/usuario/criarUsuario";

const router = Router();

router.post('/', async (request, response) => {
    return await criarUsuarioController.handle(request, response);
});

export { router as usuario };