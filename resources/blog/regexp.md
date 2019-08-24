# 正则表达式

## 构造和js使用方式

```js
var reg = /RegExpress/flags;
var reg = new RegExp(pattern: RegExp, flags?: string);

match()
replace()
search()
split()
```

flags:

- `/RegExpress/g` global 全局
- `/RegExpress/i` ignore case 忽略大小写
- `/RegExpress/m` multiple lines 多行模式

## 语法

### 基本构成

原意文本字符

元字符

| Express | means         |
| ------- | ------------- |
| `\n`    | 换行          |
| `\r`    | 回车          |
| `\0`    | 空字符        |
| `\f`    | 换页          |
| `\t`    | 水平制表符    |
| `\v`    | 垂直制表符    |
| `\cZ`   | ctrl+Z 控制符 |
| `\cX`   | ctrl+X 控制符 |
......

### 字符类(范围类)

`[reg]`构成字符类，可以构成一类字符集合

`[^reg]`构成反字符类，可以构成一类字符的反集

eg.

- `[a-z]` a-z其中之一
- `[0-9]` 0-9其中之一
- `[abc123-_]` a,b,c,1,2,3,-，_其中之一

预定义类

| Express | means           |
| ------- | --------------- |
| `.`     | [^\r\n]         |
| `\d`    | [0-9]           |
| `\D`    | [^0-9]          |
| `\w`    | [a-zA-Z0-9_]    |
| `\W`    | [^a-zA-Z0-9_]   |
| `\s`    | [\t\n\f\r\x0B]  |
| `\S`    | [^\t\n\f\r\x0B] |
| `^`     | 开始字符        |
| `$`     | 结束字符        |
| `\b`    | 单词边界        |
| `\B`    | 非单词边界      |

### 数量表述

| Express | means             |
| ------- | ----------------- |
| ?       | 0 or 1 times      |
| +       | >=1 times         |
| *       | any times         |
| {n}     | n times           |
| {n,m}   | n to m times      |
| {n,}    | more than n times |

默认贪婪模式（最多数量匹配），在表达上后加？为非贪婪模式

### 分组

`()`内的内容为一个组

`|`或表达式

`/()()()/  -> $1$2$3` 分别取得三个组的内容

`(?:)`忽略分组标记

### 前瞻后顾

js 不支持后顾

用法：

- `RegExp(?=contant)` （前瞻）如果是
- `RegExp(?!contant)`（前瞻）如果不是
- `~~RegExp(?<!contant)` （后顾）如果是~~
- `~~RegExp(?<!contant)` （后顾）如果不是~~

! ES2018 引入后行断言，V8 引擎 4.9 版（Chrome 62）已经支持
