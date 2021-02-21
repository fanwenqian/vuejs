//let(变量)/const(常量)
const app = new Vue({
  el: '#app',  //用于将vue对象实例挂载到要管理的元素
  data: {      //定义数据
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    increment(data){
      this.books[data].count++;
    },
    decrement(data){
      this.books[data].count--;
    },
    removeHandle(data){
      this.books.splice(data, 1)
    }
  },
  computed: {
    totalPrice(){
      //1.普通for循环
      // let totalPrice = 0;
      // for(let i= 0;i<this.books.length;i++){
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      //2.for(let i in this.books)
      // let totalPrice = 0;
      // for (let i in this.books) {
      //   console.log(i);
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      //3.for(let i of this.books)
      // let totalPrice = 0;
      // for (let i of this.books) {
      //   totalPrice += i.price * i.count;
      // }
      // return totalPrice;

      //4.使用高阶函数reduce
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      }, 0)
    }
  },
  filters: {
    showPrice(data){
      return '￥' + data.toFixed(2);
    }
  },
});

