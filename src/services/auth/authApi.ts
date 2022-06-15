const axios = require('axios');

export class AuthApi {

    async gerarChaveToken(chave: string): Promise<string> {
        return axios.post('http://localhost:3002/auth/key', {
            chave: chave
        }).catch((error) => {
            console.log("Serviço indisponível: AuthApi");
        })
    }

    async criptografar(conteudo: string): Promise<string>{
        return axios.post('http://localhost:3002/auth/cript', {
            conteudo: conteudo
        }).catch((error) => {
            console.log("Serviço indisponível: AuthApi");
        })
    }

}