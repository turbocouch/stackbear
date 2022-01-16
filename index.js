class Stack {

    constructor(version) {

        this.stackbear = version;

    }

    get description() {

        if (this.info == undefined) return null;
        if (this.info.description == undefined) return null;
        return this.info.description;

    }

    get version() {

        if (this.info == undefined) return null;
        if (this.info.version == undefined) return null;
        return this.info.version;

    }

    get name() {

        if (this.info == undefined) return null;
        if (this.info.name == undefined) return null;
        return this.info.name;

    }

    get stackbearVersion() {
    
        if (this.stackbear == undefined) return null;
        return this.stackbear;
    
    }

}

module.exports = Stack;