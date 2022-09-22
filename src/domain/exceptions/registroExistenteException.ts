export class RegistroExistenteException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, RegistroExistenteException.prototype);
    }

    getMessage() {
        return this.message;
    }

}