import { IRealizaChamadaQrCodeRequestDTO } from "../../model/qrCodeDTO";
import { ValidacaoBase } from "../../validations/validacaoBase";

export class RealizaChamadaUseCase {

    constructor(
        private validacaoParamObrigatorio: ValidacaoBase,
    ){}

    async execute(data: IRealizaChamadaQrCodeRequestDTO){ 
        const dadosValidacao = new Map<string, string>([
            [data.codUsuario, "codUsuario"],
            [data.chaveAula, "chaveAula"]
        ]);
        await this.validacaoParamObrigatorio.valida(dadosValidacao);

        return;
    }

}