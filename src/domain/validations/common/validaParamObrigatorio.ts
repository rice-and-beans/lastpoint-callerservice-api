import { ParamObrigatorioException } from "../../exceptions/paramObrigatorioException";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaParamObrigatorios extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const params = dadosValidacao as Map<Object, string>;
        params.forEach((key: string, value: Object) => {
            if(!value){
                throw new ParamObrigatorioException('Parâmetro '+key+ ' obrigatório não informado');
            }
        });
    }
    
}