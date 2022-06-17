const axios = require('axios');

export class AuthApi {

    async gerarChaveToken(chave: string): Promise<string> {
        return axios.post('http://localhost:3002/auth/key', {
            chave: chave
        }).catch(() => {
            console.log("Serviço indisponível: AuthApi");
        })
    }

    async validaToken(token: string): Promise<string> {
        return await axios.get('http://localhost:3002/auth/', {}, {
            headers: {
                "x-access-token": token
            }
        }).catch(() => {
            console.log("Serviço indisponível: AuthApi");
            return null;
        });
    }

}