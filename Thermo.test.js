const thermo = require('./Thermo');


test('should return 0', () => {
  expect(thermo([])).toBe(0)
})

test('should return the lowest positive number in a list of positives temperatures', () => {
    expect(thermo([4,6,2,3])).toBe(2)
})
test('should return the lowest positive number when we have two temperatures with the same distance from 0', () => {
    expect(thermo([-5, 5])).toBe(5)
    expect(thermo([5,-5])).toBe(5)
}) 

test('should return lowest number in mixed temperatures', () => {
    expect(thermo([4,5,-1,-2,3])).toBe(-1)
})
test('should return lowest number in all negatives tempratures', () => {
    expect(thermo([-1, -2])).toBe(-1)
    expect(thermo([-2,-1])).toBe(-1)
})
