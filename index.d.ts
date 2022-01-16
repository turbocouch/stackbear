declare class Stack {
    stackbear: string;
    info: StackInfo;
    services: Array<StackService>;
    assets: Array<StackAsset>;
    constructor(version: any);
    static fromJSON(json: any): Stack;
    static fromString(stackString: any): Stack;
    static stringify(stack: Stack, replacer?: any, space?: any): string;
    toString(): string;
    getStackbearVersion(): string;
    setStackbearVersion(version: any): void;
}
declare class StackInfo {
    name: string;
    description: string;
    author: string;
    version: string;
    license: string;
}
declare class StackService {
}
declare class StackAsset {
}
