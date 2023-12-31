const fizzBuzz = require('./FizzBuzz');

describe('fizzBuzz', () => {
  test('should replace the number with "FizzBuzz" if test is divisible by 5 and 3', () => {
    expect(fizzBuzz([15])).toBe('FizzBuzz');
    expect(fizzBuzz([30])).toBe('FizzBuzz');
  });

  test('should replace the number with "Fizz" if test is divisible by 3', () => {
    expect(fizzBuzz([3])). toBe('Fizz');
    expect(fizzBuzz([9])).toBe('Fizz');
  });

  test('should replace the number with "Buzz" if test is divisible by 5', () => {
    expect(fizzBuzz([5])).toBe('Buzz');
    expect(fizzBuzz([10])).toBe('Buzz');
  });

  test('should return the same number as string if test is not divisible by 5 or 3', () => {
    expect(fizzBuzz([1])).toBe('1');
    expect(fizzBuzz([7])).toBe('7');
  });
  test('should replace the numbers in large array and return a string', () => {
    expect(fizzBuzz([5,3,1,15])).toBe('BuzzFizz1FizzBuzz');
    expect(fizzBuzz([1,5,3,15,35,30,4,2])).toBe('1BuzzFizzFizzBuzzBuzzFizzBuzz42');
    expect(fizzBuzz([3,1,15,2,35,4,30,7,9,8,5])).toBe('Fizz1FizzBuzz2Buzz4FizzBuzz7Fizz8Buzz')
  });

  test('should handle an array of 100 numbers', () => {
    const result = "Fizz".repeat(100)
    const list = Array.from({ length: 100 }, () => 3);
     expect(fizzBuzz(list)).toBe(result);
  });
});
