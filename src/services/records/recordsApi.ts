import { ParamObrigatorioException } from "../../domain/exceptions/paramObrigatorioException";
import { ServicoIndisponivelException } from "../../domain/exceptions/servicoIndisponivelException";

const axios = require('axios');

export class RecordsApi {
    
    async gravaTokenAula(codAula: string, chaveGerada: string, token: string) {
        return await axios.put('http://localhost:3001/aula/token', {
            codigo: codAula,
            token: chaveGerada
        },{
            headers:{
                "x-access-token": token
            }
        }).catch((err) => {
            if(err.response && err.response.data && err.response.data.status && err.response.data.status == 400){
                throw new ParamObrigatorioException(err.response.data.observacao);
            }
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        })
    }

    async validaAulaAtual(codAula: string, codUsuario: string, token: string): Promise<boolean> {
        return await axios.get('http://localhost:3001/aula/recuperaAulaAlunoAtual', {
            headers:{
                "x-access-token": token
            },
            params:{
                codAula: codAula,
                codUsuario: codUsuario
            }
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        })
    }

    async validaPresencaJaFeita(codAula: string, codUsuario: string, token: string): Promise<boolean> {
        return await axios.get('http://localhost:3001/chamada/recuperaChamadaJaFeita', {
            headers:{
                "x-access-token": token
            },
            data:{
                codAula: codAula,
                codUsuario: codUsuario
            }
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        });
    }

    async realizaChamada(codChamada: string, token: string){
        return await axios.put('http://localhost:3001/chamada/', {
            codigo: codChamada,
            presenca: "P"
        },{
            headers:{
                "x-access-token": token
            }
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        })
    }

    async recuperaCha(codigo: string, token: string){
        return await axios.put('http://localhost:3001/chamada/', {
            codigo: codigo,
            presenca: "P"
        },{
            headers:{
                "x-access-token": token
            }
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        })
    }
    
}