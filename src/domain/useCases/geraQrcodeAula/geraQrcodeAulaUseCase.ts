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

        const retornoChave: any = await authApi.gerarChaveToken((Math.random()).toString());
        var chaveGerada = retornoChave && retornoChave.data ? retornoChave.data : qrcodeConstants.CHAVE_PADRAO;

        const codAulaRetorno: any = await authApi.criptografar(data.codAula.toString());
        var codAulaCript = codAulaRetorno && codAulaRetorno.data ? codAulaRetorno.data : data.codAula.toString();

        const codProfRetorno: any = await authApi.criptografar(data.codProfessor.toString());
        var codProfCript = codProfRetorno && codProfRetorno.data ? codProfRetorno.data : data.codProfessor.toString();

        const url = qrcodeConstants.URL_CHAMADA.
                    concat(qrcodeConstants.PARAM_AULA).concat(codAulaCript).concat("&").
                    concat(qrcodeConstants.PARAM_PROF).concat(codProfCript).concat("&").
                    concat(qrcodeConstants.PARAM_CHV).concat(chaveGerada.toString());
        
        recordsApi.gravaTokenAula(data.codAula, chaveGerada);

        const code = qr.image(url, {type: qrcodeConstants.TIPO_IMAGE});
        return code;
    }

}