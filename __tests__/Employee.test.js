const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('nombre', '123@abc.com', '3');

    expect(employee.name).toBe('nombre');
    expect(employee.id).toBe('3');
    expect(employee.email).toBe('123@abc.com');

});

test('gets the employees name', () => {
    const employee = new Employee('nombre', '123@abc.com', '3');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

test('gets the employees id', () => {
    const employee = new Employee('nombre', '123@abc.com', '3');

    expect(employee.getID()).toEqual(expect.stringContaining(employee.id.toString()));
})

test('gets the employees email', () => {
    const employee = new Employee('nombre', '123@abc.com', '3');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})


