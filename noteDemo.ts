const demo = (value: unknown) => {
  return value === 0 ? true : !!value;
};

console.log(demo(0));
