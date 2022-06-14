import { Router } from "express";
import { geraQrcodeAulaController } from "../controllers/qrCode/geraQrCodeAula";

const router = Router();

router.get('/', async (request, response) => {
    return await geraQrcodeAulaController.handle(request, response);
});

export { router as qrcode };