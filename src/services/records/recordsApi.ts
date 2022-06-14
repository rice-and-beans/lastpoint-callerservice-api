const axios = require('axios');

export class RecordsApi {
    async gravaTokenAula(codAula: string, chaveGerada: string) {
        axios.put('http://localhost:3001/aula/token', {
            codigo: codAula,
            token: chaveGerada
        }).catch((error) => {
            console.error(error);
        })
    }
}