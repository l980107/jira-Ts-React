# TS

## 类型总结

1. **number**

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
```

2. **string**

```ts
const name: string = 'jack';
```

3. **array**

> 在 Ts 中，array 一般指**所有元素类型相同**的集合，比如：

```ts
const list: Array<number> = [1, 2, 3];

//or

interface User {
  name: string;
}
const john = { name: 'john' };
const jack = { name: 'jack' };
let personList = [john, jack]; //john和jack都是User类型

// -----|
//混合类型的“数组”：
let arr = ['jack', 10]; //在Ts中不是array，叫做tuple
```

4. **boolean**

```ts
const isTrue: boolean = true;
```

5. **函数**

> 在 JS 函数上直接声明参数和返回值

```ts
const isFalsy = (value: any): boolean => {
  return value === 0 ? true : !value;
};
```

> 直接声明想要的函数类型

```ts
export const useMount = (fn: () => void) => {
    useEffect(() => {
        fn();
    }, []);
};

const isFalsy: (value: any) => boolean () => {
    return value === 0 ? true : !value
}
```

6. **any**

> any 表示这个值可以是任何值，被定义为 any 就意味着不做任何类型检查

```ts
let looselyTyped: any = 4;
//声明的值是4，那里来的ifItExists方法？
//由于声明为any，我们没法在静态检查阶段发现这个错误
looselyTyped.ifItExists();
```

7. **void**

> 函数没有返回值或者返回 Undefined

8. **object**

> 除了 number, string, boolean, bigint, symbol, null, or undefined, 其他都是 object

9. **tuple**

> tuple 是“数量固定”，类型可以是各异版的数组，在 React 中有可能使用 tuple 的地方就是 custom hook 的返回值

```ts
const [users, setUsers] = useState([]);
```

10. **enum**

> 枚举

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Red;
```

11. **null** 和 **undefined**

    > null 和 undefined 在 Ts 中既是一个值，也是一个类型：

```ts
let u: undefined = undefined;
let n: null = null;
```

12. **unknown**

> unknown 表示这个值可以是任何值（严格版的 any）在想用 any 的时候可以使用 unknown 来代替

```ts
const isFalsy = (value: any) => {
  //因为value是any类型
  //所以不应该有mayNotExist方法
  console.log(value.mayNotExist);
  return value === 0 ? true : !!value;
};
```

13. **never**

```ts
//这个函数返回的就是never，用到的比较少，在类型操作等场景会用到
const func = () => {
  throw new Error();
};
```

## interface

```ts
interface User {
  name: string;
  age: number;
}

const u: User = { name: 'jack', age: 18 };
```

> 啥时候需要声明类型: 理论上讲我们声明任何变量的时候都需要声明类型（包括普通变量、函数、组件、hook 等），声明函数、组件、hook 的时候声明的是其**参数**和**返回值**类型，Ts 有自动推断，我们有些时候就不需要声明类型了 eg：

```ts
//自动推断变量a的类型是number
let a = 1;

//自动推断返回值是number
function add(a: number, b: number) {
  return a + b;
}

//自动推断返回值是boolean
const isFalsy = (value: unknown) => {
  return value === 0 ? true : !!value;
};
```

## .d.ts

JS 文件 + .d.ts 文件 === ts 文件

> .d.ts 文件可以让 Js 文件继续维持自己 Js 文件的身份，而拥有 Ts 的类型保护一般我们写业务代码不会用到，但是点击类型跳转一般会跳转到 .d.ts 文件

## Utility type

> Utility type 也是对数据进行类型限定，但是变得灵活、可操作

### Partial

```ts
interface Person {
  name: string;
  age: number;
}

// Partial,Utility type可以将参数变为不强制性
const xiaoMing: Partial<Person> = { name: 'xiaoMing' };
const xiaoHong: Partial<Person> = { age: 19 };
const person: Partial<Person> = {};
//以上都是可以的相当于将interface Person中的每个参数都加了?
```

### Omit

```ts
interface Person {
  name: string;
  age: number;
}
//Omit,Utility type可以去除传入类型集的参数
const shenMiRen: Omit<Person, 'name'> = { age: 19 };
const shenMiRen: Omit<Person, 'age'> = { name: 'shenMiRen' };
const shenMiRen: Omit<Person, 'name'> = { name: 'shenMiRen' }; //Error
const shenMiRen: Omit<Person, 'name' | 'age'> = {}; //使用联合类型将name 和 age 参数都删掉，形成新的类型
const shenMiRen: Omit<Person, 'name'> = {}; //Error
```

# 方法总结

qs.xxx() 和 JSON.xxx() 都是格式化对象的

body.json() 接收一个 response 流，返回一个 promise，promise 解析的 resolve 结果是将文本解析为 json 格式
