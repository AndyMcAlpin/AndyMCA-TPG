const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('nombre', '2', '123@abc.com', '123');

    expect(manager.name).toBe('nombre');
    expect(manager.id).toEqual('2');
    expect(manager.email).toBe('123@abc.com');
    expect(manager.officeNumber).toBe('123');
    expect(manager.getRole()).toBe('Manager');

});