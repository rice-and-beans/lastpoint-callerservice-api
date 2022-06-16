export class AlunoNaoPertenceAulaException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, AlunoNaoPertenceAulaException.prototype);
    }

    getMessage() {
        return this.message;
    }

}