import { ServicoIndisponivelException } from "../../domain/exceptions/servicoIndisponivelException";

const axios = require('axios');

export class AuthApi {

    async gerarChaveToken(chave: string, token: string): Promise<string> {
        return axios.get('http://localhost:3002/auth/key', {
            headers:{
                "x-access-token": token
            },
            params:{
                chave: chave
            }
        }).catch(() => {
            console.log("Serviço indisponível: AuthApi");
        })
    }

    async validaToken(token: string): Promise<string> {
        return await axios.get('http://localhost:3002/auth/', {
            headers: {
                "x-access-token": token ? token : ""
            }
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: AuthApi");
        });
    }

}