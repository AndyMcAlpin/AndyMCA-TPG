const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('nombre', '123@abc.com');

    expect(employee.name).toBe('nombre');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('123@abc.com');

});

test('gets the employees name', () => {
    const employee = new Employee('nombre', '123@abc.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})
