var name = '小明';
var age = 22;

function sum(num1, num2) {
  return num1 + num2;
}

var flag = true;

if (flag) {
  console.log(sum(10, 20));
}

//1.导出方式1
export {
  flag ,sum
}
//2.导出方式2
export var num1 = 1000;

export function add(num1, num2) {
  return num1 + num2;
}

export class Person {
  run(){
    console.log('奔跑');
  }
}

//只能default一个！！！！
// const address = 'beijing';
// export default address;
export default function (){
  console.log('你好啊');
};

