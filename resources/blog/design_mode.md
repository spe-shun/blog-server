# 设计模式

<https://www.cnblogs.com/tugenhua0707/p/5198407.html>

## 工厂模式

>工厂模式可以理解为解决多个相似的问题
用途：创建一系列可用对象（e.g.商店里的各种糖）

```js {cmd=node}
function forSale(name,price){
  let obj=new Object();
  obj.name=name;
  obj.price=price;
  return obj;
}

// TEST
let pencil=new forSale('xx-pencil',1);
let pen=new forSale('xx-pen',10);
console.log(pencil,pen);
```

## 单体模式

>单体模式是一个用来划分命名空间并将一批属性和方法组织在一起的对象，如果它可以被实例化，那么它只能被实例化一次。
用途：div弹窗

```js
// 对象单体模式
let Single={
  name:'qq',
  method:function(){
    return this.name;
  }
}

// 函数单体模式
var Single = function(name){
    this.name = name;
    this.instance = null;
};
Single.prototype.getName = function(){
    return this.name;
}
function getInstance(name) {
    if(!this.instance) {
        this.instance = new Single(name);
    }
    return this.instance;
}
```

## 模块模式

>创建一个对象并以某些数据进行初始化，同时还要公开一些能够访问这些私有数据的方法

```js
var singleMode = (function(){
    // 创建私有变量
    var privateNum = 112;
    // 创建私有函数
    function privateFunc(){
        // 实现自己的业务逻辑代码
    }
    function publicMethod1(){
        console.log(privateNum)
    }
    // 返回一个对象包含公有方法和属性
    return {
        publicMethod1: publicMethod1,
        publicMethod2: publicMethod1
    };
})();
```

## 代理模式

待续。。。
