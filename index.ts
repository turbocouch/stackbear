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

    name:string;
    description:string;
    author:string;
    version:string;
    license:string;

}

class StackService {

    name:string;
    type:string;
    languages:Array<string>;
    info:HostingInfo;

}

class HostingInfo {

    virtual:boolean;
    location:(LocationInfo | null);
    memory:(number | string | MinMaxProperty | null);
    bandwidth:(number | string | MinMaxProperty | null);
    ips:(number | string | MinMaxProperty | null); // instructions per second
    flops:(number | string | MinMaxProperty | null); // float ops per second
    latency:(number | string | MinMaxProperty | null);
    electricity:(number | string | MinMaxProperty | null);

}

class MinMaxProperty {

    min:number;
    max:number;

}

class LocationInfo {

    longitude:number;
    latitude:number;

}

class StackAsset {



}
