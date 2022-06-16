import { authApi } from "../../../services/auth";
import { AuthenticationTokenException } from "../../exceptions/authenticationTokenException";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaTokenAula extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const token = dadosValidacao as string;
        try{
            await authApi.validaToken(token);
        }catch(err){
            throw new AuthenticationTokenException('Token de aula inválido!');
        }
    }
    
}