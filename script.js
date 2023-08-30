let myFirstVar = 'Hello';
myFirstVar = 5;

//const onlyOnce = 'World';

const s1 = 'I am a string';
const s2 = 'Also a string';
const s3 = `I am a backtick string`;

const age = 27;
const text = `I am ${age} years old`;
const text2 = 'I am ' + age + ' years old';

const n1 = 1;
const n2 = 3.4444;
const n3 = Number('3');
const n4 = Number('Not a number');

let isValid = true;

console.log(s1);
console.log(s2);
console.log(s3);
console.log(text);
console.log(text2);
console.log(n1);
console.log(n2);
console.log(n3 + n2);
console.log(n4);

console.log(isValid);
isValid = false;
console.log(isValid);

let num = 5;
console.log(num);

const foo = (n) => {
  n = n * 2;
  return n;
};

num = foo(num);
console.log(num);

const o = {
  name: 'Zizi',
  favouriteNumber: 5,
};

const a1 = [1, 2, 3];
const a2 = [1, 'Zizi', true];

a1.push(23);
a1.forEach((item) => {
  console.log(item);
});

const f = (a, b) => {
  return a + b;
};

console.log(f(5, 6));
console.log(f('Zi', 'zi'));
console.log(f({}, {}));

// const f3 = (i) => i.foo();

// f3(3);

let pet1 = {
  name: 'Kitty',
  type: 'cat',
};

const bar = (p) => {
  p = {
    name: 'Doggy',
    type: 'dog',
  };
  return p;
};

console.log('LET pet1... előtte: ', pet1);
console.log('BAR1 függv. átalakítása: ', bar(pet1));
console.log('Utána: ', pet1);

const pet2 = {
  name: 'Sammy',
  type: 'snake',
};

const bar2 = (p) => {
  p.name = 'Hammy';
  p.type = 'hamster';
};

console.log('CONST pet2 ... előtte: ', pet2);
bar2(pet2);
console.log('Utána p.name és p.type: ', pet2);

// undefined és null
let v;
console.log(v);

v = null;
console.log(v);

v = undefined;
console.log(v);

// operátorok
const a = '5';
const b = 5;

console.log(a == b);
console.log(a === b);

const p1 = {name: 'Zizi'};
const p2 = {name: 'Zizi'};
console.log(p1 == p2);
console.log(p1 === p2);

const p3 = p1;
console.log(p1 == p3);
console.log(p1 === p3);

// js: dinamikusan típusos
let d = 5;
d = '6';
d = [1,2,3];
d = i => console.log(i);

d("Javascript");

//closure
const makeClosure = () => {
  const name = 'Closure';
  const displayName = () => {
    alert(name);
  };
  return displayName;
};

const testFn = makeClosure();
testFn();



