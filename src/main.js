// var less = require("less");
import style from './css/style.less'; //引入css样式
var arr = [1, 2, 3, 4, 4, 5, 5, 6, 6, ];
var Arr = arr.filter((item) => {
    return item > 5;
})
console.log(Arr);
document.write('<h1>javascript</h1>');
document.write('<h1>javascript</h1>');