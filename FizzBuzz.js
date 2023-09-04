function FizzBuzz(numbers) {
    const FizzBuzzArrayResult = numbers.map((number) => {
        if (number % 3 === 0 && number % 5 === 0) {
            return 'FizzBuzz'
        }
        if (number % 3 === 0) {
            return 'Fizz'
        }
        if (number % 5 === 0) {
            return 'Buzz'
        } else {
            return number.toString()
        }
    })
    const finalResult = FizzBuzzArrayResult.join('');

  return finalResult;
    
}
module.exports = FizzBuzz;