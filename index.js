class Stack {

    constructor(version) {

        this.setStackbearVersion(version);

    }

    static fromJSON(json) {

        var stackobject = new Stack(json);

        // Set Info
        if (json.info != undefined) {

            stackobject.setName(json.info.name)
            stackobject.setVersion(json.info.version)
            stackobject.setDescription(json.info.description)
            stackobject.setLicense(json.info.license)
            stackobject.setAuthor(json.info.author)

        } else {

            throw new Error("Stack doesn't have info!");

        }

        return stackObject;

    }

    static fromString(stackString) {

        var parsedStack = JSON.parse(stackString);
        return this.fromJSON(parsedStack);

    }

    static stringify(stack, replacer, space) {

        if (!(stack instanceof Stack)) throw new Error("Inputted object is not a stack!");

        let stackObject = {
            stackbear: stack.stackbear,
            info: stack.info,
            services: stack.services,
            assets: stack.assets
        } 

        return JSON.stringify(stackObject, replacer, space)

    }

    toString() {

        return this.stringify()

    }

    get name() {

        if (this.info == undefined) return null;
        if (this.info.name == undefined) return null;
        return this.info.name;

    }

    setName(name) {

        if (this.info == undefined)
            this.info = {};

        this.info.name = name;

    }

    get stackbearVersion() {
    
        if (this.stackbear == undefined) return null;
        return this.stackbear;
    
    }

    setStackbearVersion(version) {

        if (version == "version-one") {

            this.stackbear = version;
            return;

        }

        throw new Error(`Stackbear version '${version}' is not defined.`);

    }

    get version() {

        if (this.info == undefined) return null;
        if (this.info.version == undefined) return null;
        return this.info.version;

    }

    setVersion(version) {

        if (this.info == undefined)
            this.info = {};

        this.info.version = version;

    }

    get description() {

        if (this.info == undefined) return null;
        if (this.info.description == undefined) return null;
        return this.info.description;

    }

    setDescription(description) {

        if (this.info == undefined)
            this.info = {};

        this.info.description = description;

    }

    get author() {

        if (this.info == undefined) return null;
        if (this.info.author == undefined) return null;
        return this.info.author;

    }

    setAuthor(author) {

        if (this.info == undefined)
            this.info = {};

        this.info.author = author;

    }

    get license() {

        if (this.info == undefined) return null;
        if (this.info.license == undefined) return null;
        return this.info.license;

    }

    setLicense(license) {

        if (this.info == undefined)
            this.info = {};

        this.info.license = license;

    }

    get services() {

        if (this.services == undefined) return null;
        return this.services;

    }

    setServices(services) {

        if (!Array.isArray(services)) throw new Error("Services must be an array!");

        this.services = services;

    }

    addService(service) {

        if (this.services == undefined) 
            this.services = [];

        this.services.push(service);

    }

}

module.exports = Stack;