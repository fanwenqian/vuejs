(function (){
  //想使用flag和sum函数

  if(moduleA.flag){
    console.log('小明是天才');
  }

  if(!moduleB.flag){
    console.log('小红是天才');
  }

  console.log(moduleA.sum(10, 22));;
})()


//模块化导入
// var {flag,sum} = require('./aaa.js')