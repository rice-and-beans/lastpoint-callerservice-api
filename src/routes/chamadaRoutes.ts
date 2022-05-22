import { Router } from "express";
import { geraQrcodeAulaController } from "../controllers/chamada/qrCode/geraQrCodeAula";

const router = Router();

router.get('/qrcode', async (request, response) => {
    return await geraQrcodeAulaController.handle(request, response);
});

export { router as chamada };