
import { geraQrcodeAulaUseCase } from "../../../../domain/useCases/chamada/geraQrcodeAula";
import { GeraQrcodeAulaController } from "./geraQrcodeAulaController";

const geraQrcodeAulaController = new GeraQrcodeAulaController(
    geraQrcodeAulaUseCase
);

export { geraQrcodeAulaController }