export class ParamNaoEhJsonException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, ParamNaoEhJsonException.prototype);
    }

    getMessage() {
        return this.message;
    }

}