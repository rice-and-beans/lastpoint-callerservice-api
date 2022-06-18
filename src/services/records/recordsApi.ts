import { ServicoIndisponivelException } from "../../domain/exceptions/servicoIndisponivelException";

const axios = require('axios');

export class RecordsApi {
    async gravaTokenAula(codAula: string, chaveGerada: string) {
        return await axios.put('http://localhost:3001/aula/token', {
            codigo: codAula,
            token: chaveGerada
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        })
    }

    async validaAulaAtual(codAula: string, codUsuario: string): Promise<boolean> {
        return await axios.get('http://localhost:3001/aula/now', {
            codAula: codAula
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        })
    }

    async validaPresencaJaFeita(codAula: string, codUsuario: string): Promise<boolean> {
        return await axios.get('http://localhost:3001/chamada/presenca', {
            codAula: codAula,
            codUsuario: codUsuario
        });
    }

    async realizaChamada(codAula: string, codUsuario: string){
        return await axios.post('http://localhost:3001/chamada/', {
            codAula: codAula,
            codUsuario: codUsuario
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: RecordsApi");
        })
    }
    
}