var Stack = /** @class */ (function () {
    function Stack(version) {
        this.stackbear = 'version-one';
        this.info = new StackInfo();
        this.services = [];
        this.assets = [];
        this.setStackbearVersion(version);
    }
    Stack.fromJSON = function (json) {
        var stackobject = new Stack(json.stackbear);
        if (json.info != undefined) {
            stackobject.info.name = json.info.name;
            stackobject.info.version = json.info.version;
            stackobject.info.description = json.info.description;
            stackobject.info.license = json.info.license;
            stackobject.info.author = json.info.author;
        }
        else {
            throw new Error("Stack doesn't have info!");
        }
        stackobject.services = json.services;
        stackobject.assets = json.services;
        return stackobject;
    };
    Stack.fromString = function (stackString) {
        var parsedStack = JSON.parse(stackString);
        return this.fromJSON(parsedStack);
    };
    Stack.stringify = function (stack, replacer, space) {
        var stackObject = {
            stackbear: stack.stackbear,
            info: stack.info,
            services: stack.services,
            assets: stack.assets
        };
        return JSON.stringify(stackObject, replacer, space);
    };
    Stack.prototype.toString = function () {
        return Stack.stringify(this);
    };
    Stack.prototype.getStackbearVersion = function () {
        return this.stackbear;
    };
    Stack.prototype.setStackbearVersion = function (version) {
        if (version == "version-one") {
            this.stackbear = version;
            return;
        }
        throw new Error("Stackbear version '" + version + "' is not defined.");
    };
    return Stack;
}());
var StackInfo = /** @class */ (function () {
    function StackInfo() {
        this.name = "New Stack";
        this.description = "This is a new stack.";
        this.author = "Jane Doe";
        this.version = "1.0.0";
        this.license = "MIT";
    }
    return StackInfo;
}());
var StackService = /** @class */ (function () {
    function StackService() {
    }
    return StackService;
}());
var StackAsset = /** @class */ (function () {
    function StackAsset() {
    }
    return StackAsset;
}());
module.exports = Stack;
