const a = {
  name: 'jack',
  age: '8',
  school: 'xiaoxue',
};

const b = {
  name: 'jack',
  age: '18',
  school: 'daxue',
};

const c = { ...a, ...b };

console.log(`c`, c);
