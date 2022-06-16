export class AuthenticationTokenException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, AuthenticationTokenException.prototype);
    }

    getMenssage() {
        return this.message;
    }

}