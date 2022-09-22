import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorio";
import { GeraQrcodeAulaUseCase } from "./geraQrcodeAulaUseCase";

const validaParamObrigatorios = new ValidaParamObrigatorios();

const geraQrcodeAulaUseCase = new GeraQrcodeAulaUseCase(
    validaParamObrigatorios
);

export { geraQrcodeAulaUseCase }