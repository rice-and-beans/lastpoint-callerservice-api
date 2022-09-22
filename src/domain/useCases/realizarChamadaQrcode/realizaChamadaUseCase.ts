import { recordsApi } from "../../../services/records";
import { IRealizaChamadaQrCodeRequestDTO, IValidaAulaQrCodeRequestDTO } from "../../model/qrCodeDTO";
import { ValidacaoBase } from "../../validations/validacaoBase";

export class RealizaChamadaUseCase {

    constructor(
        private validaParamObrigatoriosParam: ValidacaoBase,
        private validaParamObrigatoriosChave: ValidacaoBase,
        private validaEhObjectJson: ValidacaoBase,
        private validaTokenAula: ValidacaoBase,
        private validaAulaAtualUsuario: ValidacaoBase
    ){}

    async execute(data: IRealizaChamadaQrCodeRequestDTO){ 
        await this.validaCamposObrigatoriosParam(data);
        const jsonString = Buffer.from(data.chaveAula, 'base64').toString();
        
        await this.validaEhObjectJson.valida(jsonString);
        const dadosAula = JSON.parse(jsonString);
        
        await this.validaCamposObrigatoriosAula(dadosAula);
        await this.validaTokenAula.valida(dadosAula.lastpointAula.chave);
        
        var dadosValidacao = {
            codAula: dadosAula.lastpointAula.aula, 
            codUsuario: data.codUsuario,
            token: data.token
        } as IValidaAulaQrCodeRequestDTO

        await this.validaAulaAtualUsuario.valida(dadosValidacao);
        const retorno: any = await recordsApi.validaAulaAtual(dadosAula.lastpointAula.aula, data.codUsuario, data.token);
        const codChamada = retorno ? retorno.data ? retorno.data.codigo : null : null
        await recordsApi.realizaChamada(codChamada, data.token);
    }

    async validaCamposObrigatoriosParam(data: IRealizaChamadaQrCodeRequestDTO){
        const dadosValidacaoParam = new Map<string, string>([
            [data.codUsuario, "codUsuario"],
            [data.chaveAula, "chaveAula"],
        ]);
        await this.validaParamObrigatoriosParam.valida(dadosValidacaoParam);
    }

    async validaCamposObrigatoriosAula(dadosAula: any){
        const dadosValidacaoChaveAula = new Map<string, string>([
            [dadosAula, "dadosAula"],
            [dadosAula.lastpointAula, "lastpointAula"],
            [dadosAula.lastpointAula.aula, "aula"],
            [dadosAula.lastpointAula.prof, "prof"],
            [dadosAula.lastpointAula.chave, "chave"],
        ]);
        await this.validaParamObrigatoriosChave.valida(dadosValidacaoChaveAula);
    }

}