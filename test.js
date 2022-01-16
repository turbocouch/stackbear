const Stack = require(".")

test(`stackbear data is loaded from string properly`, () => {

    let testObject = {
        stackbear: 'version-one',
        info: {
            name: 'New Stack',
            description: 'A new stack',
            version: '1.0.0',
            author: 'Jane Doe',
            license: 'MIT',
        },
        services: [

        ],
        assets: [
            
        ]
    };

    let stack = Stack.fromString(JSON.stringify(testObject));

    expect(stack.name).toEqual('New Stack')
    expect(stack.description).toEqual('A new stack')
    expect(stack.version).toEqual('1.0.0')
    expect(stack.author).toEqual('Jane Doe')
    expect(stack.license).toEqual('MIT')

    expect(stack.getServices()).toEqual([])

    expect(stack.getAssets()).toEqual([])

})