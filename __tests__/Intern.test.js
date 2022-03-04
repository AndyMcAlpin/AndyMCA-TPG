const Intern = require('../lib/Intern.js');

test('creates manager object', () => {
    const intern = new Intern('nombre', '2', '123@abc.com', 'escuela');

    expect(intern.name).toBe('nombre');
    expect(intern.id).toEqual('2');
    expect(intern.email).toBe('123@abc.com');
    expect(intern.school).toBe('escuela');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe(intern.school);

});