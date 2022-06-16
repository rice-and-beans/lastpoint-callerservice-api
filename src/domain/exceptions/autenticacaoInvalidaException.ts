export class AutenticacaoInvalidaException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, AutenticacaoInvalidaException.prototype);
    }

    getMessage() {
        return this.message;
    }

}