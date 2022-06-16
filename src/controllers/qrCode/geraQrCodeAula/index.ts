
import { geraQrcodeAulaUseCase } from "../../../domain/useCases/geraQrcodeAula";
import { GeraQrCodeAulaController } from "./geraQrCodeAulaController";

const geraQrcodeAulaController = new GeraQrCodeAulaController(
    geraQrcodeAulaUseCase
);

export { geraQrcodeAulaController }