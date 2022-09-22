export class ServicoIndisponivelException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, ServicoIndisponivelException.prototype);
    }

    getMenssage() {
        return this.message;
    }

}