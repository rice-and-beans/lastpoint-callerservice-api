import { qrcodeConstants } from "../../../constants/qrcodeConstants";
import { geraQrCodeRequestDTO } from "../../model/geraQrCodeDTO";
import * as qr from "qr-image";
import { ValidacaoBase } from "../../validations/validacaoBase";
import { authApi } from "../../../services/auth";
import { recordsApi } from "../../../services/records";

export class GeraQrcodeAulaUseCase {

    constructor(
        private validacaoParamObrigatorio: ValidacaoBase,
    ){}

    async execute(data: geraQrCodeRequestDTO){ 
        const dadosValidacao = new Map<string, string>([
            [data.codAula, "codAula"],
            [data.codProfessor, "codProfessor"]
        ]);
        await this.validacaoParamObrigatorio.valida(dadosValidacao);

        const chaveGerada = await this.gerarTokenAula();
        const conteudoQrCode = this.gerarJsonQrCode(data.codAula, data.codProfessor, chaveGerada);
        recordsApi.gravaTokenAula(data.codAula, chaveGerada);

        const code = qr.image(conteudoQrCode, {type: qrcodeConstants.TIPO_IMAGE});
        return code;
    }

    async gerarTokenAula(): Promise<string> {
        const retornoChave: any = await authApi.gerarChaveToken((Math.random()).toString());
        var chaveGerada = retornoChave && retornoChave.data ? retornoChave.data : qrcodeConstants.CHAVE_PADRAO;
        return chaveGerada;
    }

    gerarJsonQrCode(codAulaCript: string, codProfCript: string, chaveGerada: string): string{
        const jsonString = this.montaJsonString(codAulaCript, codProfCript, chaveGerada);
        const paramsCript = Buffer.from(jsonString).toString('base64');
        return paramsCript;
    }

    montaJsonString(codAulaCript: string, codProfCript: string, chaveGerada: string){
        const json = {
            lastpointAula: {
                aula: codAulaCript,
                prof: codProfCript,
                chave: chaveGerada
            }
        }
        return JSON.stringify(json);
    }

}