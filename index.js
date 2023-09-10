// 1
let x = 10;
alert (x);
x = 20;
alert (x);

// 2
let iphone = 2007;
alert(`Год выпуска первого iphone - ${iphone}`);

// 3
let name = `Бренданом`;
alert(`Имя создателя javascript - ${name}`);

// 4
let x1 = 10;
let x2 = 2;
alert(`Сумма = ${x1+x2}, Разность = ${x1-x2} , Произведение = ${x1*x2}, Частное = ${x1/x2}`);

// 5
let result = 2;
alert(`2 в пятой степени = ${result**5}`);

// 6
let a = 9;
let b = 2;
alert(`Остаток от деления = ${9%2}`);

// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// 8
let age = prompt(`Сколько вам лет?`);
alert(age);

// 9
const user = {
    name: 'Айдар',
    age: 22,
    isAdmin: true
}

// 9.1
user[`city of residence`] = true;

// 9.2
user.age = 23;

// 9.3
delete user[`city of residence`];

// 9.4
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert(user[info]);

// 10
let Name = prompt(`Как вас зовут?`);
alert(`Привет, ${Name}!`);