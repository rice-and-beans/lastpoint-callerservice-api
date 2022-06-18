import { ServicoIndisponivelException } from "../../domain/exceptions/servicoIndisponivelException";

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
                "x-access-token": token ? token : ""
            }
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: AuthApi");
        });
    }

    async salvarTokenInvalido(token: string): Promise<string> {
        return await axios.post('http://localhost:3002/auth/invalid', {
            token: token
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: AuthApi");
        });
    }

}