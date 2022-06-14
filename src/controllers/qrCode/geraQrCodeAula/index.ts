
import { geraQrcodeAulaUseCase } from "../../../domain/useCases/geraQrcodeAula";
import { GeraQrcodeAulaController } from "./geraQrcodeAulaController";

const geraQrcodeAulaController = new GeraQrcodeAulaController(
    geraQrcodeAulaUseCase
);

export { geraQrcodeAulaController }