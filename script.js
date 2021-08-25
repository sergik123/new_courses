/*1. Создайте переменную a и присвойте ей значение 3. Выведите значение этой
 переменной на экран*/
var a=3;
console.log(a);

/*2. Создайте переменные a = 10 и b = 2. Выведите на экран их сумму, разность,
произведение и частное (результат деления)*/

var a1=10;
var b1=2;

var sum=a1+b1;
var diff=a1-b1;
var mltp=a1*b1;
var div=a1%b1;

console.log('сумма '+sum);
console.log('разность '+diff);
console.log('произведение '+mltp);
console.log('частное '+div);

/*3. Создайте переменные c = 15 и d = 2. Просуммируйте их, а результат присвойте
переменной result. Выведите на экран значение переменной result*/

var c=15;
var d=2;

var result=c+d;

console.log('result '+result);

/*4. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму*/

var a=10;
var b=2;
var c=5;

console.log('сумма 3 чисел '+(a+b+c));

/*5. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат
присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7.
Сложите переменные c и d, а результат запишите в переменную result. Выведите на
экран значение переменной result.*/

var a=17;
var b=10;
var c=a-b;
var d=7;

var result=c+d;

console.log('вывод result '+result);

/*6. Создайте переменную text и присвойте ей значение 'Привет, Мир!'.
Выведите значение этой переменной на экран*/

var text='Привет, Мир!';
console.log(text);

/*7. Создайте переменные text1 = 'Привет, ' и text2 = 'Мир!'. С
помощью этих переменных и операции сложения строк выведите
на экран фразу 'Привет, Мир!'.*/

var text1='Привет,';
var text2='Мир!';

console.log('сложение строк '+(text1+text2));

/*8. Создайте переменную text и присвойте ей значение 'Привет, Мир!'.
Выведите слово ‘Мир' используя эту переменную.*/

var text='Привет, Мир!';
console.log(text.substr(8,3));

/*9. Напишите скрипт, который считает количество секунд в часе, сутках, неделе, месяце
из 30 дней*/

var hour_seconds=1*60*60;
var day_seconds=24*hour_seconds;
var week_seconds=7*day_seconds;
var month_seconds=30*day_seconds;

console.log('секунд за час '+hour_seconds);
console.log('секунд за день '+day_seconds);
console.log('секунд за неделю '+week_seconds);
console.log('секунд за месяц '+month_seconds);

/*10. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /
=, ++, --. Количество строк кода при этом не должно измениться! Код для переделки:*/

let num = 1;
 num += 12;
 num -= 14;
 num *= 5;
 num /= 7;
 num += 1;
 num -= 1;

 console.log(num);

 /*11. Создайте три переменные - час, минуты, секунды. С их помощью выведите текущее
время в формате 'час:минуты:секунды'.*/

var date = new Date();

var hour=date.getHours();
var minuts=date.getMinutes();
var seconds=date.getSeconds();
console.log(hour+':'+minuts+':'+seconds);

/*12. Переделайте этот код так, чтобы в нем использовалась операция +=. Количество строк кода при этом не должно измениться!*/

let text12 = 'Я';
text12 += ' хочу' ;
text12 += ' знать' ;
text12 += ' JS!' ;
console.log(text12);

/*13. Немного математики:
• Даны два числа. Найти их сумму и произведение.
• Даны два числа. Найдите сумму их квадратов.
• Даны три числа. Найдите их среднее арифметическое.
• Даны три числа x,y и z. Найдите (x+1)−2(z−2x+y)*/

var a1=5;
var a2=10;

var sum2=a1+a2;
var diff2=a1*a2;

console.log('сумма двух числов '+sum2);
console.log('произведение двух чисел '+diff2);

var x=2;
var y=7;
var z=4;

var avg=(x+y+z)/3;

var result2=(x+1)-2*(z-2*x+y);

console.log('среднеее арифметическое 3 чисел '+avg);
console.log('результат выражения '+result2);

/*14. Дано натуральное числа. Найдите остатки от деления этих чисел на 3 и на 5. Дано число. Увеличьте его на 30%, на 120%.*/

var num1=125;

var num_div_3=num1%3;
var num_div_5=num1%5;

console.log('остаток от деления на 3 '+num_div_3);
console.log('остаток от деления на 5 '+num_div_5);

var num_percent_30=num1*0.3;
var num_percent_120=num1*1.2;

console.log('30% от числа '+num_percent_30);
console.log('120% от числа '+num_percent_120);

/*15. задание: 3 > 2 ? 'сдал экзамен' : 'не сдал экзамен’; По этому примеру реализуй три задачи*/

var age=17;

var zagran=true;

age>18 ? console.log('тебе больше 18') : console.log('тебе меньше 18');

zagran ? console.log('у тебя есть загран паспорт') : console.log('у тебя нет загран паспорта');

age==16 ? console.log('тебе 16 лет') : console.log('тебе не 16 лет');

/*16. определить какое число четное или не четное. Реализовать через тернарную операцию.*/

var num_res=31;

num_res%2==0 ? console.log('число четное') : console.log('число не четное');

/*17. Создайте массив orders с несколькими элементами в формате “название товара: цена”. Добавьте в него
один элемент в начало и в конец. Выведите все элементы массива на экран.*/

var orders=['samsung A20: 3500','samsung A51: 5500','Xiaomi Redmi 5: 3450'];

orders.unshift('Iphone XR: 15450');
orders.push('Nokia 3210: 1500');

orders.forEach(function (value, index, array) {
    console.log(value);
});

/*18. Создайте массив с пятью элементами. Удалите второй и четвертый элемент. Выведите все элементы
массива.*/

var ar=['1','2','3','4','5'];
var first=ar[2];
var second=ar[4];

ar.filter(function (word) {
        if(word==first || word==second){
            ar.splice(ar.indexOf(word),1);
        }
   });

ar.forEach(function (value, index, array) {
    console.log(value);
});

/*19. Создайте массив с несколькими элементами. Выведите все четные элементы массива*/

var ar1=[1,2,3,4,5];
var res1=[];

ar1.forEach(function (value, index, array) {
    if(value%2==0){
       res1.push(value);
    }
});

console.log(res1);

/*20. Создайте массив с несколькими числами, используя цикл найдите максимальное число в массиве*/

var ar2=[50,10,34,534,121,4];

var max=ar2[0];

for (var i=0; i<ar2.length; i++){
    if(ar2[i]>max){
        max=ar2[i];
    }
}
console.log('самое большое число в массиве '+max);

/*21. Создайте два массива с числами одинаковой длины, сравните элементы одного массива с элементами
другого.*/

var ar3=[1,2,3,4,5];
var ar4=[6,7,8,9,3];

console.log(ar3>ar4);
console.log(ar3<ar4);
console.log(ar3==ar4);

/*22. Создайте массив со строками ‘Я хочу знать JS’ и ‘Я не хочу знать JS’. Используя поиск по строке удалите
из него элемент ‘Я не хочу знать JS’.*/

var ar5=['Я хочу знать JS','Я не хочу знать JS'];
var str=ar5.includes('Я не хочу знать JS');
ar5.splice(str,1);

ar5.forEach(function (value, index, array) {
    console.log(value);
});