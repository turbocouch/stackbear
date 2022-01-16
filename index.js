class Stack {

    constructor(version) {

        this.stackbear = version;

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

        throw new Error(`Stackbear version ${version} is not defined.`);

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

}

module.exports = Stack;