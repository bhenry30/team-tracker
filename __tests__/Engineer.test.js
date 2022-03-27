const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Brando', 3, 'brando@gmail.com', 'bhenry30');

test('creates an engineer', () => {
    expect(engineer.name).toBe('Brando');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toBe('bhenry30')
})

test('get\'s engineer name', () => {
    expect(engineer.getName()).toBe('Brando')
});

test('get\'s engineer id', () => {
    expect(engineer.getID()).toBe(engineer.id)
});

test('get\'s engineer role', () => {
    expect(engineer.getRole()).toBe('Engineer')
});

test('get\'s engineer email', () => {
    expect(engineer.getEmail()).toBe(engineer.email)
});

test('get\'s engineer GitHub', () => {
    expect(engineer.getGithub()).toBe('<strong>Github:</strong> <a href=\"https://github.com/bhenry30\">bhenry30</a>')
});