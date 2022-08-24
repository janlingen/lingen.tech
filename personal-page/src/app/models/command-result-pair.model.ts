export class CommandResultPair {
    private _command: string;
    private _result: string;

    constructor(command: string, result: string){
        this._command = command;
        this._result = result;
    }

    get command(): string{
        return this._command;
    }

    get result(): string{
        return this._result;
    }
}
