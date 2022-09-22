import { recordsApi } from "../../../services/records";
import { AlunoNaoPertenceAulaException } from "../../exceptions/alunoNaoPertenceAulaException";
import { IValidaAulaQrCodeRequestDTO } from "../../model/qrCodeDTO";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaAulaAtualUsuario extends ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dados = dadosValidacao as IValidaAulaQrCodeRequestDTO;
        try{
            if(!await recordsApi.validaAulaAtual(dados.codAula, dados.codUsuario, dados.token)){
                throw new AlunoNaoPertenceAulaException('Aluno não pertence a aula informada ou aula já encerrada!');
            }
        }catch(err){
            throw new AlunoNaoPertenceAulaException('Aluno não pertence a aula informada ou aula já encerrada!');
        }
    }
    
}