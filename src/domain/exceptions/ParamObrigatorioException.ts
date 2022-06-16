export class ParamObrigatorioException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, ParamObrigatorioException.prototype);
    }

    getMessage() {
        return this.message;
    }

}