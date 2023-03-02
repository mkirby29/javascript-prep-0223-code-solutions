const person = {
  firstName: 'Matt',
  lastName: 'Kirby',
  hobby: 'guitar'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'Web Administrator/Developer';
console.log("The person's current job is: ", person.job);

person['previousJob'] = 'bartender';
console.log("The person's previous job is: ", person['previousJob']);

console.log('The complete person object: ', person);
