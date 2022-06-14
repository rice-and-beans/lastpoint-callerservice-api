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
        var chaveGerada = retornoChave ? retornoChave.data : qrcodeConstants.CHAVE_PADRAO;
        chaveGerada = chaveGerada ? chaveGerada : qrcodeConstants.CHAVE_PADRAO;

        const url = qrcodeConstants.URL_CHAMADA.
                    concat((data.codAula).toString()).concat("&").
                    concat((data.codProfessor).toString()).concat("&").
                    concat((chaveGerada).toString());

        recordsApi.gravaTokenAula(data.codAula, chaveGerada);

        const code = qr.image(url, {type: qrcodeConstants.TIPO_IMAGE});
        return code;
    }

}