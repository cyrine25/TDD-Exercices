const thermo = require('./Thermo');


test('should return 0', () => {
  expect(thermo([])).toBe(0)
})

test('should return 2', () => {
    expect(thermo([4,6,2,3])).toBe(2)
})

test('should return lowest positive number', () => {
    expect(thermo([4,5,-1,-6,1,3])).toBe(1)
})