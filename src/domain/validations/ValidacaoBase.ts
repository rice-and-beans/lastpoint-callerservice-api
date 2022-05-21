export abstract class ValidacaoBase {

    constructor(
        protected proximo?: ValidacaoBase,
    ){}
    
    public async valida(dadosValidacao?: Object) {
        await this.verifica(dadosValidacao);
        if(this.proximo){
            await this.proximo.valida(dadosValidacao);
        }
    }

    public abstract verifica(dadosValidacao: Object);

}