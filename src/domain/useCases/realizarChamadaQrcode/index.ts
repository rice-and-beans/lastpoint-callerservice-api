import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorio";
import { ValidaParamObrigatorioAula } from "../../validations/aula/validaParamObrigatorioAula";
import { ValidaEhObjectJson } from "../../validations/common/validaEhObjectJson";
import { ValidaTokenAula } from "../../validations/aula/validaTokenAula";
import { ValidaAulaPresenca } from "../../validations/aula/validaAulaPresenca";
import { ValidaAulaAtualUsuario } from "../../validations/aula/validaAulaAtualUsuario";
import { RealizaChamadaUseCase } from "./realizaChamadaUseCase";

const validaParamObrigatoriosParam = new ValidaParamObrigatorios();
const validaParamObrigatoriosChave = new ValidaParamObrigatorioAula();
const validaEhObjectJson = new ValidaEhObjectJson();
const validaAulaPresenca = new ValidaAulaPresenca();
const validaTokenAula = new ValidaTokenAula();

const validaAulaAtualUsuario = new ValidaAulaAtualUsuario(
    validaAulaPresenca
);

const realizarChamadaQrcode = new RealizaChamadaUseCase(
    validaParamObrigatoriosParam,
    validaParamObrigatoriosChave,
    validaEhObjectJson,
    validaTokenAula,
    validaAulaAtualUsuario
);

export { realizarChamadaQrcode }