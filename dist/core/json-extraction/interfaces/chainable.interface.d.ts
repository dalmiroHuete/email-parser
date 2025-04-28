export interface Chainable {
    setNext(handler: Chainable): Chainable;
    handle(email: any): Promise<any | null>;
}
