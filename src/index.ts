// index.ts
let a: number = 123;

const h1 = document.createElement("h1");
h1.innerHTML = "Hello, I am Duke";
document.body.appendChild(h1);



//布尔类型 boolean
const bool: boolean = false;
console.log("布尔类型=>", bool);

//数字类型 bumber
const nums: number = 123;
console.log("数字类型=>", nums)

//字符串 string
let str: string = "love";
console.log("字符串=>", str)

//数组 array
let arr: number[] = [1, 2, 3]
let brr: Array<string> = ["a", "b", "c"]
console.log("数组=>", arr, brr)

//null 和 undefined
let u: undefined = undefined;
let n: null = null;
console.log("null=>", n);
console.log("undefined=>", u);

//对象 object
let obj: object = {
  name: "duke",
  age: 18
}
console.log("对象=>", obj)
function getKeys(arg: object) {
  return Object.values(arg);
}
console.log("函数,对象为参数=>", getKeys({name: "duke", age: 18}))

//元组 tuple
let tuple: [string, number] = ["duke", 18];
console.log("元组=>", tuple)
console.log("元组[0]=>", tuple[0])

//枚举 enum
enum roles {
  man = 7,
  women = "duke_shao"
}
console.log("枚举=>", roles.man, roles.women)

//任意类型 any
let value: any;
value = 123;
console.log("任意类型=>", value);
value = "dukes";
console.log("任意类型=>", value);
value = false;
console.log("任意类型=>", value);
let crr: any[] = [1, "a", true];
console.log("任意类型=>", crr);

//无类型 void
const consoleText = (text: string): void => {
  console.log(text);
}

//never
const errorFunc = (msg: string): never => {
  throw new Error(msg)
}

//未知类型 unknown
let future: unknown;
future = 123;
console.log("未知类型=>", future)
future = "new_life";
console.log("未知类型=>", future)

//交叉类型 &
let merge = <T, U>(arg1: T, arg2: U): T & U => {
  let res = <T & U>{};
  res = Object.assign(arg1, arg2);
  return res
}
const arg1 = {firstName: "duke"}
const arg2 = {lastName: "shao"}
const fullInfo = merge(arg1, arg2);
console.log("交叉类型=>", fullInfo)

//联合类型 |
let num: number | string;
num = 123;
console.log("联合类型_数字=>", num);
num = "abc";
console.log("联合类型_字符串=>", num);