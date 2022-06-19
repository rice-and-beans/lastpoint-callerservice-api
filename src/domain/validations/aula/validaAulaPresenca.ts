import { Console } from "console";
import { recordsApi } from "../../../services/records";
import { PresencaJaRealizada } from "../../exceptions/presencaJaRealizada";
import { IValidaAulaQrCodeRequestDTO } from "../../model/qrCodeDTO";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaAulaPresenca extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dados = dadosValidacao as IValidaAulaQrCodeRequestDTO;
        try {     
            const retorno: any = await recordsApi.validaPresencaJaFeita(dados.codAula, dados.codUsuario, dados.token);
            if(retorno && retorno.data){
                throw new PresencaJaRealizada('Presença já feita!');
            }
        } catch (error) {
            throw new PresencaJaRealizada('Presença já feita!');
        }
    }
    
}