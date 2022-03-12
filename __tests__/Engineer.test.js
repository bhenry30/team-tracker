const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Brando', 3, 'brando20');

test('creates an engineer', () => {
    expect(engineer.name).toBe('Brando');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toBe('brando20')
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
    expect(engineer.getGithub()).toBe('Github: <a href="https://github.com/brando20">brando20<a/>')
});