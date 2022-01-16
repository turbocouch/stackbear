class Stack {

    constructor(version) {

        this.stackbear = version;

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