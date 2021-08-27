//1. Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
    return (age>18) || confirm('Родители разрешили?')
}
//checkAge(17);

//2. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a,b){
    if(a>b){
        return b;
    }else{
        return a;
    }
}
console.log(min(1,2));
//3. Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат

function pow(x,n) {
    var t=1;
   if(x==1){
       return x;
   }else{
       for(var i=1; i<=n; i++){
           t*=x;
       }
   }
   return t;
}
console.log(pow(3,3));

//4. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром
// должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

function inArray(str,arr){
    var status=false;
    arr.forEach(function (item,index,array) {
        if(item===str){
           status=true;
        }
    });
    if(status){
        return true;
    }else{
        return false;
    }
   // return false;
}
var ar=['kiev',4,'kharkov'];
console.log(inArray(4,ar));

//5. Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst,
// которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой
// буквой.

function upperString(str) {
    var ar=str.split(' ');
    var str_res='';
    ar.forEach(function (item,index,array) {
        str_res+=ucfirst(item);
    });
    return str_res;
}
function ucfirst(str){
    var result;
    result=str.charAt(0).toUpperCase()+str.slice(1)+' ';
    return result;
}
var str='sdfsfsf sdf erwrwrw sdfsfsfsfq';
console.log(upperString(str));

//6. Сделайте функцию each, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому
// элементу массива. Функция each должна вернуть измененный массив.

function each(arr, reverse) {
    var res=[];
    for(var i=0; i<arr.length;i++){
       res.push(reverse1(arr[i]));
    }
    return res;
}
function reverse1(ar) {
    var res=[];
    for(var i=ar.length; i>=0;i--){
        res.push(ar[i]);
    }
    return res;
}

var a=['qwerty','test','next','reverse'];
console.log(each(a));

//7. Сделайте функцию each, которая первым параметром принимает массив, а вторым - массив функций, которые по очереди
// применятся к каждому элементу массива: к первому элементу массива - первая функция, ко второму - вторая и так далее пока
// функции в массиве не закончатся, после этого возьмется первая функция, вторая и так далее по кругу.

function sum(a) {
    if(a!=null)
    return 'сумма '+(a+12);
}

function diff(a) {
    if(a!=null)
    return 'разница '+(a-2);
}
function mltpl(a) {
    if(a!=null)
    return 'умножение '+(a*4);
}
function div(a) {
    if(a!=null)
    return 'деление '+(a/0.75);
}

function each2(ar,func) {
        var i=0;
        while (i<=ar.length){
            func.forEach(function (item,index,array) {
               // if(ar[i]!=NaN){
                    console.log(item(ar[i]));

               // }
                i++;
            });
        }

}
var ar=[2,56,23,43,87,121,34,54,12];
var func=[sum,diff,mltpl,div];

each2(ar,func);

//8. Используя замыкание сделайте функцию, которая считает и выводит количество своих вызовов

function makeFunction(){
    var x=0;
    return function countFunction() {
       return ++x;
    }
}
var counter1=makeFunction();
var counter2=makeFunction();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());

//9. Ряд Фибоначчи

function fibonachi(n) {
    var str=[];
    var prev=0;
    var next=1;
    for(var i=0; i<n;i++){
        next=prev+next;
        prev=next-prev;
        console.log(prev);
    }
    return prev;
}
console.log('Фибоначи '+fibonachi(50));