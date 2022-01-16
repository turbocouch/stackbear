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

    expect(stack.info.name).toEqual('New Stack')
    expect(stack.info.description).toEqual('A new stack')
    expect(stack.info.version).toEqual('1.0.0')
    expect(stack.info.author).toEqual('Jane Doe')
    expect(stack.info.license).toEqual('MIT')

    expect(stack.services).toEqual([])

    expect(stack.assets).toEqual([])

})