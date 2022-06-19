import { AutenticacaoInvalidaException } from "../domain/exceptions/autenticacaoInvalidaException";
import { authApi } from "../services/auth";
import { BaseController } from "./baseController";

export abstract class BaseControllerAuth extends BaseController{

    protected async auth(request){
        const token = request.headers['x-access-token'];
        var retorno: any;

        try {
            retorno = await authApi.validaToken(token);
        } catch (error) {
            throw new AutenticacaoInvalidaException("Não Autenticado");
        }

        if(!retorno){
            throw new AutenticacaoInvalidaException("Não Autenticado");
        }
    }
    
}