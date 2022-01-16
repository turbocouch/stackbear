const Stack = require(".")

test(`stackbear data is loaded from string properly`, () => {

    let testObject = {
        stackbear: 'version-one',
        info: {
            name: 'New Stack',
            version: '1.0.0',
            author: 'Jane Doe'
        }
    };

    let stack = Stack.fromString(JSON.stringify(testObject));

    expect(stack.name).toEqual('New Stack')
    expect(stack.version).toEqual('1.0.0')
    expect(stack.author).toEqual('Jane Doe')

})