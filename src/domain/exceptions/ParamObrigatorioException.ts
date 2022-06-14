export class ParamObrigatorioException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, ParamObrigatorioException.prototype);
    }

    getMenssage() {
        return this.message;
    }

}