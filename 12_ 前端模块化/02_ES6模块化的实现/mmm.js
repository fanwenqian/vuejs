import {flag,sum} from "./aaa.js";

if(flag){
  console.log('小明是天才');
}

console.log(sum(10, 22));

import {num1} from "./aaa.js";

console.log(num1);

import {add} from "./aaa.js"

console.log(add(120, 22));

import {Person} from "./aaa.js"

const person = new Person();
person.run()

import addr from "./aaa.js"

// console.log(addr);
addr();

//统一全部导入
import * as aaa from './aaa.js'
console.log(aaa.flag);