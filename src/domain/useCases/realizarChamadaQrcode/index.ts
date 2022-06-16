import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorio";
import { RealizaChamadaUseCase } from "./realizaChamadaUseCase";

const validaParamObrigatorios = new ValidaParamObrigatorios();

const realizarChamadaQrcode = new RealizaChamadaUseCase(
    validaParamObrigatorios
);

export { realizarChamadaQrcode }