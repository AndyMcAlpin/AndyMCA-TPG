const Engineer = require('../lib/Engineer.js');

test('creates manager object', () => {
    const engineer = new Engineer('nombre', '123@abc.com', 'Gittyup');

    expect(engineer.name).toBe('nombre');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toBe('123@abc.com');
    expect(engineer.github).toBe('Gittyup');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('github.com/Gittyup');

});