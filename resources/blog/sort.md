# 排序

## js内部排序及其基本实现

插入排序：将数据逐个插入有序列表
>优化——折半插入排序Binary Insertion Sort（使用折半查找）

```js
//快排
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let left = [], right = [];
  let middle = array.splice(parseInt(array.length / 2),1);
  for (let i = 0; i < array.length; i++) {
    if (array[i] < middle[0]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(middle,quickSort(right));
}

// 冒泡排序
function bubbleSort(array) {
  let temp;
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

//选择排序
function selectSort(array) {
  let min, temp;
  let len = array.length;
  for (let i = 0; i < len; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

// 插入排序
function insertionSort(array) {
  let len = array.length, temp, i, j;

  for (i = 0; i < len; i++) {
    temp = array[i];
    for (j = i - 1; j > -1 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = temp;
  }
  return array;
}

// 合并排序
function merge(left, right) {
  let result = [], l = 0, r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}
function mergeSort(array) {

  if (array.length < 2) {
    return array;
  }

  let middle = parseInt(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
```
