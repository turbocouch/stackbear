class Stack {

    stackbear = null;
    info = {
        name: null,
        author: null,
        version: null,
        license: null
    };
    services = [];

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