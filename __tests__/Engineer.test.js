const Engineer = require('../lib/Engineer')

test('creates an engineer', () => {
    const engineer = new Engineer();

    expect(engineer.role).toBe('Engineer');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toContain('@')
})