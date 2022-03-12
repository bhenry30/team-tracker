const Manager = require('../lib/Manager')

const manager = new Manager('Jenna', 1, 281);

test('Creates an manager', () => {

    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.number).toEqual(expect.any(Number))
})

test('Get\'s Manager name', () => {
    expect(manager.getName()).toBe('Jenna')
});

test('Get\'s Manager id', () => {
    expect(manager.getID()).toBe(manager.id)
});

test('Get\'s Manager role', () => {
    expect(manager.getRole()).toBe('Manager')
});

test('Get\'s Manager email', () => {
    expect(manager.getEmail()).toBe(manager.email)
});

test('Get\'s Manager office number', () => {
    expect(manager.getOfficeNum()).toBe(281)
});