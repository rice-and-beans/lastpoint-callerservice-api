import { ParamNaoEhJsonException } from "../../exceptions/paramNaoEhJsonException";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaEhObjectJson extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const jsonString = dadosValidacao as string;
        try {
            JSON.parse(jsonString);
        } catch (e) {
            throw new ParamNaoEhJsonException('A chave de aula é inválida');
        }
    }
    
}