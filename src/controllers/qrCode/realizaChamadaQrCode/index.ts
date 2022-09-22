
import { realizarChamadaQrcode } from "../../../domain/useCases/realizarChamadaQrcode";
import { RealizaChamadaQrCodeController } from "./realizaChamadaQrCodeController";

const realizaChamadaQrCodeController = new RealizaChamadaQrCodeController(
    realizarChamadaQrcode
);

export { realizaChamadaQrCodeController }