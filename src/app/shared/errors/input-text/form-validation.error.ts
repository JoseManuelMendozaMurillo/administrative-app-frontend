export class FormValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'FormValidationError'; // Set the error name
    }
}