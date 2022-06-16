export class PresencaJaRealizada extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, PresencaJaRealizada.prototype);
    }

    getMenssage() {
        return this.message;
    }

}