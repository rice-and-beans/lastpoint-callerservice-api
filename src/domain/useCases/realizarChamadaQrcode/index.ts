import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorio";
import { ValidaParamObrigatorioAula } from "../../validations/aula/validaParamObrigatorioAula";
import { ValidaEhObjectJson } from "../../validations/common/validaEhObjectJson";
import { ValidaTokenAula } from "../../validations/aula/validaTokenAula";
import { ValidaAulaAtualUsuario } from "../../validations/aula/validaAulaAtualUsuario";
import { RealizaChamadaUseCase } from "./realizaChamadaUseCase";

const validaParamObrigatoriosParam = new ValidaParamObrigatorios();
const validaParamObrigatoriosChave = new ValidaParamObrigatorioAula();
const validaEhObjectJson = new ValidaEhObjectJson();
const validaTokenAula = new ValidaTokenAula();
const validaAulaAtualUsuario = new ValidaAulaAtualUsuario();

const realizarChamadaQrcode = new RealizaChamadaUseCase(
    validaParamObrigatoriosParam,
    validaParamObrigatoriosChave,
    validaEhObjectJson,
    validaTokenAula,
    validaAulaAtualUsuario
);

export { realizarChamadaQrcode }