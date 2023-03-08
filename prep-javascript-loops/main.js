// create your loops here.
function whileLoop1() {
  const num = [];
  let i = 0;
  while (i < 10) {
    num.push(i);
    i++;
  } return num;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const arr = [];
  let i = 0;
  while (i < 19) {
    arr.push(i);
    i += 2;
  } return arr;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const loo = [];
  for (let i = 0; i < 10; i++) {
    loo.push(i);
  } return loo;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
}
console.log(forLoop2());

function forInLoop1(object) {
  const obj = [];
  for (const x in object) {
    obj.push(x);
  } return obj;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};

console.log('for in loop 1 output', forInLoop1(object));

function forInLoop2(object) {
  const obj2 = [];
  for (const x in object) {
    obj2.push(object[x]);
  } return obj2;
}
console.log('for in loop 2 output', forInLoop2(object));
