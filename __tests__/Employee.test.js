const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')
const employee = new Employee('Chris', 2, 'chris@yahoo.com')

test('creates an employee object', () => {
    expect(employee.name).toBe('Chris');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'))
})

test('get\'s employee name', () => {
    expect(employee.getName()).toBe(employee.name)
});

test('get\'s employee id', () => {
    expect(employee.getID()).toBe(employee.id)
});

test('get\'s employee role', () => {
    expect(employee.getRole()).toBe('Employee')
});

test('get\'s employee email', () => {
    expect(employee.getEmail()).toBe(employee.email)
});