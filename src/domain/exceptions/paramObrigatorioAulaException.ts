export class ParamObrigatorioAulaException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, ParamObrigatorioAulaException.prototype);
    }

    getMessage() {
        return this.message;
    }

}