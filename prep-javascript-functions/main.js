function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function convertHoursToMinutes(hours) {
  return hours * 60;
}

function getGreeting(name) {
  return 'Hello ' + name;
}

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getFullName(firstName, lastName) {
  return firstName + lastName;
}

function cube(number) {
  return number * number * number;
}

console.log('addTwoNumbers Exercise: ', addTwoNumbers(2, 2));
console.log('convertHoursToMinutes Exercise: ', convertHoursToMinutes(2));
console.log('getGreeting Exercise: ', getGreeting('Matt'));
console.log('addAndMultipyBy5 Exercise: ', addAndMultiplyBy5(10, 5));
console.log('multiplyAndDivideBy5 Exercise: ', multiplyAndDivideBy5(35, 10));
console.log('subtractTwoNumbers Exercise: ', subtractTwoNumbers(22, 7));
console.log('getCircumference Exercise: ', getCircleCircumference(5));
console.log('getFullName Exercise: ', getFullName('Matt', 'Kirby'));
console.log('cube Exercise: ', cube(5));
