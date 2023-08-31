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

const p1 = { name: 'Zizi' };
const p2 = { name: 'Zizi' };
console.log(p1 == p2);
console.log(p1 === p2);

const p3 = p1;
console.log(p1 == p3);
console.log(p1 === p3);

// js: dinamikusan típusos
let d = 5;
d = '6';
d = [1, 2, 3];
d = (i) => console.log(i);

d('Javascript');

//closure
const makeClosure = () => {
  const name = 'Closure';
  const displayName = () => {
    alert(name);
  };
  return displayName;
};

//const testFn = makeClosure();
//testFn();

const isPositive = (n) => {
  if (n >= 0) {
    console.log('positive');
  } else {
    console.log('negative');
  }
};

isPositive(5);
isPositive(-5);

const isTruthy = (v) => {
  if (v) {
    console.log('Truthy');
  } else {
    console.log('Falsy');
  }
};
isTruthy({});
isTruthy('');

const mapToStars = (n) => {
  let res;
  switch (n) {
    case 1:
      res = '*';
      break;
    case 2:
      res = '**';
      break;
    case 3:
      res = '***';
      break;
    case 4:
      res = '****';
      break;
    case 5:
      res = '*****';
      break;
    default:
      res = '-';
  }
  return res;
};

console.log(mapToStars(2));
console.log(mapToStars(0));

const throwIfFalsy = (v) => {
  if (!v) {
    throw new Error('Falsy value');
  }
};
try {
  throwIfFalsy('Truthy');
  console.log('success');
} catch (err) {
  console.error('Caught error', err);
}

try {
  throwIfFalsy(false);
  console.log('success2');
} catch (err) {
  console.error('Caught error2', err);
}

for (let i = 0; i <= 4; i++) {
  console.log('For loop', i + 1);
}

let i = 0;
while (i <= 4) {
  console.log('Whileloop', i + 1);
  i++;
}

const a11 = '5';
const b11 = 5;
console.log(a11 == b11);

const p11 = {
  name: 'Zizi',
};

const p22 = {
  name: 'Zizi',
};

console.log(p11 === p22); // Referencia típusoknál nincs deep equalconstp3 = p1;console.log(p1 === p3); // Csak a referencia

let x = 5;
let y = 4;
console.log(x + y); // 9
console.log(x - y); // 1
console.log(x * y); // 20
console.log(x / y); // 1.25
console.log(x % y); // 1
x += y; // x = x + y
console.log(x); // 9
x++; // x = x + 1
console.log(x); // 10

console.log(!true);
const e1 = 'Cat' && 'Dog'; //t && t returns Dog
const e2 = false && 'Cat'; //f && t returns false
const e3 = 'Cat' && false; //t && f returns false
console.log(e1, e2, e3);

const e4 = 'Cat' || 'Dog'; //t || t returns Cat
const e5 = false || 'Cat'; //f || t returns Cat
const e6 = 'Cat' || false; //t || f returns Cat
const e7 = false || false; //f || f returns false
console.log(e4, e5, e6, e7);

const isAdult = (age) => {
  let res;
  res = age <= 18 ? false : true;
  return res;
};
console.log(isAdult(16)); // false
console.log(isAdult(22)); // true

const person = {
  name: 'John',
  email: 'john@example.com',
};

console.log(person);
delete person.email;
console.log(person);

console.log(typeof 5); // number
console.log(typeof 'a string'); // string
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof new Date()); // object
console.log(typeof (() => {})); // function
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true

document.getElementById('submit').addEventListener('click', e => console.log(e));