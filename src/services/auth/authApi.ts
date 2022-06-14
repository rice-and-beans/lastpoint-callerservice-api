const axios = require('axios');

export class AuthApi {
    async gerarChaveToken(chave: string): Promise<string> {
        return axios.post('http://localhost:3002/auth/key', {
            chave: chave
        });
    }
}