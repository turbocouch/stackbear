export default class Stack {

    stackbear = 'version-one';
    info:StackInfo = new StackInfo();
    services:Array<StackService> = [];
    assets:Array<StackAsset> = [];

    constructor(version) {

        this.setStackbearVersion(version);

    }

    static fromJSON(json) {

        let stackobject = new Stack(json.stackbear);

        if (json.info != undefined) {

            stackobject.info.name = json.info.name;
            stackobject.info.version = json.info.version;
            stackobject.info.description = json.info.description;
            stackobject.info.license = json.info.license;
            stackobject.info.author = json.info.author;

        } else {

            throw new Error("Stack doesn't have info!");

        }

        stackobject.services = json.services;
        stackobject.assets = json.services;

        return stackobject;

    }

    static fromString(stackString) {

        var parsedStack = JSON.parse(stackString);
        return this.fromJSON(parsedStack);

    }

    static stringify(stack:Stack, replacer?, space?) {

        let stackObject = {
            stackbear: stack.stackbear,
            info: stack.info,
            services: stack.services,
            assets: stack.assets
        } 

        return JSON.stringify(stackObject, replacer, space)

    }

    toString() {

        return Stack.stringify(this)

    }
    
    getStackbearVersion() {

        return this.stackbear;

    }

    setStackbearVersion(version) {

        if (version == "version-one") {

            this.stackbear = version;
            return;

        }

        throw new Error(`Stackbear version '${version}' is not defined.`);

    }
    
}

class StackInfo {

    name = "New Stack";
    description = "This is a new stack.";
    author = "Jane Doe";
    version = "1.0.0";
    license = "MIT";

}

class StackService {



}

class StackAsset {



}
