export class RegistroExistenteException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, RegistroExistenteException.prototype);
    }

    getMenssage() {
        return this.message;
    }

}