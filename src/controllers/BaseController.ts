import { Request, Response } from "express";
import { retornoPadraoConstants } from "../constants/retornoPadraoConstants";
import { ExcpetionStatusType } from "../domain/exceptions/types/exceptionsStatusType";
import { MensagensExceptionType } from "../domain/exceptions/types/mensagensExceptionType";

export abstract class BaseController {

    public async handle(request: Request, response: Response): Promise<Response>{
        try{
            return await this.execute(request, response);
        }catch(err){
            const status = this.trataStatusRetornoException(err);
            const corpo = this.trataCorpoRetornoException(err, status);
            return response.status(status).send(corpo);
        }
    }

    public abstract execute(request: Request, response: Response): Promise<Response>;

    private trataStatusRetornoException(err): number{
        var numStatus;
        if(err.constructor && err.constructor.name){
            numStatus = ExcpetionStatusType[err.constructor.name];
        }else{
            numStatus = ExcpetionStatusType['Error'];
        }
        return numStatus = numStatus ? Number(numStatus.toString()) : 500;
    }

    private trataCorpoRetornoException(err, status): Object {
        const msgRetorno = this.recuperaMensagemRetorno(err);
        return {
            status: status,
            observacao: msgRetorno
        };
    }
    
    private recuperaMensagemRetorno(err): String{
        var mensagemInformada;
        var mensagem = err.message ? err.message : retornoPadraoConstants.MSG_NAO_TRATADA;

        if(err.constructor && err.constructor.name){
            mensagemInformada = MensagensExceptionType[err.constructor.name];
        }
        if(mensagemInformada){
            mensagem = mensagemInformada + mensagem;
        }
        return mensagem;
    }

}