
var should = chai.should()
describe('function fizzBuzz', function () {
  it('should return Fizz if argument is divisible by 3', function () {
    var result = fizzBuzz(9)
    result.should.be.equal("Fizz")
  })
  it('should return Fizz if argument is divisible by 5', function () {
    var result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('should return Fizz if argument is divisible by 3 and 5', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('should return argument itself if the argument can\'t be divided by 3 or(and) 5', function () {
    var result = fizzBuzz(7)
    result.should.be.equal(7)
  })
})
