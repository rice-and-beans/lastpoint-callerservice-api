const axios = require('axios');

export class RecordsApi {
    async gravaTokenAula(codAula: string, chaveGerada: string) {
        axios.put('http://localhost:3001/aula/token', {
            codigo: codAula,
            token: chaveGerada
        }).catch(() => {
            console.log("Serviço indisponível: RecordsApi");
        })
    }

    async validaAulaAtual(codAula: string, codUsuario: string): Promise<boolean> {
        return axios.get('http://localhost:3001/aula/now', {
            codAula: codAula,
            codUsuario: codUsuario
        }).catch(() => {
            console.log("Serviço indisponível: RecordsApi");
        })
    }

    async realizaChamada(codAula: string, codUsuario: string){
        axios.post('http://localhost:3001/chamada/', {
            codAula: codAula,
            codUsuario: codUsuario
        }).catch(() => {
            console.log("Serviço indisponível: RecordsApi");
        })
    }
    
}