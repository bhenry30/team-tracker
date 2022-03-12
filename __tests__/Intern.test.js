const Intern = require('../lib/Intern')

const intern = new Intern('Milo', 4, 'Stanford');

test('Creates an Intern', () => {

    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toBe('Stanford')
})

test('Get\'s Intern name', () => {
    expect(intern.getName()).toBe('Milo')
});

test('Get\'s Intern id', () => {
    expect(intern.getID()).toBe(intern.id)
});

test('Get\'s Intern role', () => {
    expect(intern.getRole()).toBe('Intern')
});

test('Get\'s Intern email', () => {
    expect(intern.getEmail()).toBe(intern.email)
});

test('Get\'s Intern School', () => {
    expect(intern.getSchool()).toBe('Stanford')
});