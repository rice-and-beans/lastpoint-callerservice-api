import { qrcodeConstants } from "../../../constants/qrcodeConstants";
import { geraQrCodeRequestDTO } from "../../model/geraQrCodeDTO";
import * as qr from "qr-image";
import { ValidacaoBase } from "../../validations/validacaoBase";
import { authApi } from "../../../services/auth";

export class GeraQrcodeAulaUseCase {

    constructor(
        private validacaoParamObrigatorio: ValidacaoBase,
    ){}

    async execute(data: geraQrCodeRequestDTO){ 
        const dadosValidacao = new Map<number, string>([
            [data.codAula, "codAula"],
            [data.codProfessor, "codProfessor"]
        ]);
        await this.validacaoParamObrigatorio.valida(dadosValidacao);
        const retorno: any = await authApi.gerarChaveToken((Math.random()).toString());
        const chaveGerada = retorno ? retorno.data : qrcodeConstants.CHAVE_PADRAO;

        const url = qrcodeConstants.URL_CHAMADA.
                    concat((data.codAula).toString()).concat("&").
                    concat((data.codProfessor).toString()).concat("&").
                    concat((chaveGerada ? chaveGerada : qrcodeConstants.CHAVE_PADRAO).toString());

        const code = qr.image(url, {type: qrcodeConstants.TIPO_IMAGE});
        return code;
    }

}