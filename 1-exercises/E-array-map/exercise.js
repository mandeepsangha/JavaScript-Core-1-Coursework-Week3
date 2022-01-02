// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//Solution 1

let numberBy100 = numbers.map(x => x * 100);
console.log(numberBy100);

//Solution 2

function century(number) {
    return number * 100;
  }

let numberByHundred = numbers.map(century);

console.log(numberByHundred);

//Solution 3

let numberByOne = numbers.map(function double (number){
    return number * 100;
});

console.log(numberByOne);