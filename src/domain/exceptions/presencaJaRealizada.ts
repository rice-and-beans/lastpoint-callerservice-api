export class PresencaJaRealizada extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, PresencaJaRealizada.prototype);
    }

    getMessage() {
        return this.message;
    }

}