export class AuthenticationTokenException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, AuthenticationTokenException.prototype);
    }

    getMessage() {
        return this.message;
    }

}