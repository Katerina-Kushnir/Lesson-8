//task 1
let admin;
let name;
name = 'Katya'; //у меня "name" aвтоматически само перечеркивается и пишет, что "name" устарело, исправить никак не могу.
admin = name;
alert(admin);

//task 2
const birthday = '18.04.1982';
const age = someCode(birthday);
//Заглавные буквы для имени birthday, а так же для имени age можно использовать
const BIRTHDAY = '18.04.1982'; 
const AGE = someCode(BIRTHDAY); 

//task 3
let name = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Ilya

//task 4
"" + 1 + 0 // "10"
"" - 1 + 0 //-1
true + false // 1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //Infinity
"  -9  " + 5 //"-95"
"  -9  " - 5 //-14
null + 1 // 1
undefined + 1 // NaN
 
//task 5
let a = 1, b = 1; 
let c = ++a; // 2
let d = b++; // 1

//task 6
let y = 2; 
let x = 1 + (y *= 2); //y=4, x=5

//task 7
5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false

//task 8 
let name = prompt ("Введите ваше имя?");
alert(name);

//task 9 
if ("0") {   
    alert( 'Привет' ); //alert выведется, так как "0" - строка (не пустая), а так же не число 0.
}

//task 10
let js = prompt('Каково "официальное" название JavaScript?');
if (js == 'ECMAScript') {
    alert('Правильно!');
} else {
    alert("You do not know? 'ECMAScript'!");
}

//task 11
let number = prompt ("Введите любое число");
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert (0);
}

//task 12
let result = (a + b < 4) ? 'Мало' : 'Много';

//task 13
let message = (login == 'Сотрудник') ? 'Привет' :
              (login == 'Директор') ? 'Здравствуйте' :
              (login == '') ? 'Нет логина' :
              '';

//task 14
alert( null || 2 || undefined ); // 2 (первое истинное значение)

//task 15
alert( alert(1) || 2 || alert(3) ); //сначала выведет 1, а затем выведет 2 и прекратит выполнение, так как 2 (true)

//task 16
alert( 1 && null && 2 );  // null, так как это первое ложное значение 

//task 17
alert( alert(1) && alert(2) ); //1, undefined

//task 18
alert( null || 2 && 3 || 4 ); //сначала выполняется 2 && 3 (так как && имеет больше приоритет чет ||) и выведет 3. Потом будет  null || 3 || 4 и выведет 3, так как это первое истинное значение.

//task 19
if (age >= 14 && age <= 90);

//task 20
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

//task 21
if (-1 || 0) alert( 'first' ); //выполнится (-1)
if (-1 && 0) alert( 'second' ); //не выполнится
if (null || -1 && 1) alert( 'third' ); //выполнится (1) 

//task 22
let login = prompt ("Введите ваш логин");
if (login == "Admin") {
    let password = prompt ("Введите ваш пароль");
    if (password == "Я главный") {
        alert ("Здравствуйте!")
    } else if (password == "" || password == null) {
        alert ("Отменено");
    } else {
        alert( "Неверный пароль" );
    }
} else if (login == "" || login == null) {
    alert ("Отменено");
} else {
    alert( "Я вас не знаю" );
}

//task 23
if (browser == "Edge") {
    alert ("You've got the Edge!"); 
} else if (browser == "Chrome" || "Firefox" || "Safari" || "Opera") {
    alert ('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

//task 24
let a = +prompt('a?', ''); 
switch (a) {
    case 0: 
        alert(0); 
        break;
    case 1:   
        alert(1); 
        break;
    case 2:
    case 3:   
        alert('2, 3'); 
        break;
}

//task 25
let a;
if (a >= 0) {
    alert(a + 1);
} else {
    alert(a);
}

//task 26
let b;
if (a >= 0) {
    alert(b + 1);
} else {
    alert(b - 2);
}

//task 27
let c;
if (c > 0) {
    alert(c + 1);
} else if (c <0) {
    alert(c - 2);
} else {
    alert(a = 10);
}

//task 28
let a = 2, b = 3, c = -1;
let count = 0;
if (a > 0) count +=1;
if (b > 0) count +=1;
if (c > 0) count +=3;
console.log(count);

//task 29
let k = 5, i = 1, j = -2;
let count1 = 0, count2 = 0; 
if (a > 0) count1 +=1;
else count2 +=1;
if (b > 0) count1 +=1;
else count2 +=1;
if (c > 0) count1 +=3;
else count2 +=1;
console.log(count1, count2);

// task 30
let v=5, w=10;
if (v > w) console.log(v);
else console.log(w);

//task 31
let a=5, b=7;
if (a < b) console.log(1);
else console.log(2);

//task 32
let c=5, d=10;
if (c > d) console.log(c, d);
else console.log(d, c);

//task 33
let A=10, B=9;
if (A < B) console.log(A, B);
else {
    A=A+B; 
    B=A-B; 
    A=A-B;
} console.log(A, B);

//task 34
let A=10, B=10;
if (A != B) console.log(A = A + B, B=A)
else console.log(A=0, B=0);

//task 35
let A=6, B=8;
if (A != B) {
    if (A > B) {
        B = A;
    } else {
        A = B;
    }
} 
else (A=0, B=0);
console.log(A, B);

//task 36
let a=3, b=7, c=5;
if (a<b && a<c) {
    console.log (a);
} else if (b<a && b<c) {
    console.log (b);
} else {
    console.log(c);
}

//task 37
let a=3, b=7, c=8;
if ((a<b) && (a>c) || (a>b) && (a<c)) {
    console.log (a);
} else if ((b<a) && (b>c) || (b>a) && (b<c)) {
    console.log (b);
} else {
    console.log(c);
}

//task 38
let a=3, b=7, c=8;
let max, min;
if (a < b) {
    min = a, max = b;
} else {
    min = b, max = a;
}
if (c > min) {
    max = c;
} else {
    min = c;
}
console.log (min, max);

//task 39
let a = 4, b = 6, c = 1;
let sum;
if ((a < b) && (a < c)) {
    sum = b + c;
} else if ((b < a) && (b < c)) {
    sum = a + c;
} else {
    sum = a + b;
}
console.log(sum);

//task 40
let a = 10, b = 10, c = 5;
if (b == c) {
    console.log(1);
} else if (a == c) {
    console.log(2);
} else {
    console.log(3);
}