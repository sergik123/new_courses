//1. Напишите код, выполнив задание из каждого пункта отдельной строкой:
// • Создайте пустой объект user.
// • Добавьте свойство name со значением John.
// • Добавьте свойство surname со значением Smith.
// • Измените значение свойства name на Pete.
const user={
        name: 'John',
        surname: 'Smith'
};
console.log(user.name);
user.name='Pete';
console.log(user.name);

//2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
const obj={
};
var isEmpty = function(obj) {
    for(var p in obj){
        return false;
    }
    return true;
};
console.log(isEmpty(obj));

//3. У нас есть объект, в котором хранятся зарплаты нашей команды “let salaries = {Ivan: 1000, Dmitriy:
// 1600, Anton: 1300}”. Напишите код для суммирования всех зарплат и сохраните результат в
// переменной sum. Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    Ivan: 1000,
    Dmitriy: 1600,
    Anton: 1300,
    sumall: function(obj,sum){
            for(const key in obj){
                if(key!='sumall')
                sum+=obj[key];
            }
            return sum;
    }
};
console.log(salaries.sumall(salaries,0));

//4.Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять
// объект. Используйте typeof для проверки, что значение свойства числовое.

let obj1 = {
    Ivan: 1000,
    Dmitriy: 1600,
    Anton: 1300,
    multiplyNumeric: function(obj){
        for(const key in obj){
           if(typeof(obj[key]=='number')){
               obj[key]*=2;
           }
        }
    }
};
console.log(obj1.multiplyNumeric(obj1));

for(const key in obj1){
    console.log('ключ '+key +' значение '+obj1[key]);
}

//5.Создайте класс transport и дочерние - car, motorbike, и bicycle.
// Придумайте и опишите по несколько свойств и методов, включая
// одинаковый для всех классов метод ride() и свойство maxSpeed,
// ограничьте максимальную скорость для объектов классов car,
// motorbike.

class transport{
    #maxSpeed=100;
    constructor(name,price) {
        this.name=name;
        this.price=price;
    }
    sayHello() {
      console.log('Hello, I\'m '+this.name);
    };
    ride(){
        console.log('My maxSpeed, '+ this.#maxSpeed);
    }
}

class car extends transport{
    #maxSpeed=250;
    typeEngine='Gas engine';
    ride(){
        console.log('My maxSpeed, '+ this.#maxSpeed);
    }
    get maxSpeed() {
        return this.#maxSpeed;
    }
    set maxSpeed(value) {
        this.#maxSpeed=value >350 ? value : 350;
    }
}

class motorbike extends transport{
    #maxSpeed=150;
    number_of_wheels=2;
    ride(){
        console.log('My maxSpeed, '+ this.#maxSpeed);
    }
    get maxSpeed() {
        if(this.#maxSpeed>250){
            return 250;
        }else{
            return this.#maxSpeed;
        }
    }
    set maxSpeed(value) {
        this.#maxSpeed=value <250 ? value : 250;
    }
}

class bicycle extends transport{
    #maxSpeed=60;
    number_of_transmission=18;
    ride(){
        console.log('My maxSpeed, '+ this.#maxSpeed);
    }
    get maxSpeed () {
        if(this.#maxSpeed>50){
            return 50;
        }else{
            return this.#maxSpeed;
        }
    }
    set maxSpeed (value) {
        this.#maxSpeed=value <50 ? value : 50;
    }
}
let desna=new bicycle('Desna',3550);
desna.maxSpeed=45;
desna.sayHello();
desna.ride();
console.log(desna.maxSpeed);

let yamaha=new motorbike('Yamaha',25050);
yamaha.maxSpeed=210;
yamaha.sayHello();
yamaha.ride();
console.log(yamaha.maxSpeed);

//6. Создайте массив из 6 объектов классов car, motorbike, bicycle и
// отсортируйте его от самого быстрого к самому медленному.

let car1=new car('Волга',15000);
let car2=new car('Nissan',150000);

let bike1=new motorbike('yamaha',100000);
let bike2=new motorbike('suzuki',250000);

let cicle1=new bicycle('test1',10000);
let cicle2=new bicycle('test2',15000);

var result=[car1,car2,bike1,bike2,cicle1,cicle2];

result.sort((a,b)=>a.maxSpeed<b.maxSpeed ? 1 : -1);

console.log(result);

//7. Используя прототип добавьте метод классу transport.

transport.prototype.addMyMethod=function () {
    console.log('add new method in class Transport');
};

const newmethod=new transport('test',100);
newmethod.addMyMethod();