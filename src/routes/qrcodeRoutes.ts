import { Router } from "express";
import { geraQrcodeAulaController } from "../controllers/qrCode/geraQrCodeAula";
import { realizaChamadaQrCodeController } from "../controllers/qrCode/realizaChamadaQrCode";

const router = Router();

router.get('/', async (request, response) => {
    return await geraQrcodeAulaController.handle(request, response);
});
router.post('/', async (request, response) => {
    return await realizaChamadaQrCodeController.handle(request, response);
});

export { router as qrcode };