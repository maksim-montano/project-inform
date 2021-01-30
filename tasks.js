// Написать функцию, которая принимает два числа и возращает результат их умножения







const func = (first, second) => {
    return first * second;
};

// console.log(func(5, 6))





// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)









const funct = (name, age) => {
    return `Привет ${name} с возрастом ${age} лет`;
};

// console.log(funct("Максим Кобозев", 15))








// Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"









function defneInfo(sex) {
    if(sex == "M") return "Ваш пол Мужской";
    if(sex == "F") return "Ваш пол Женский";

    return 'Ваш пол не определен';
}

// console.log(defneInfo("M"))









// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.






const arr = [
    ["Понедельник"],
    ["Вторник"],
    ["Среда"],
    ["Четверг"],
    ["Пятница"],
    ["Суббота"],
    ["Воскресенье"],
];

const func_num = (_, end) => {
    const dayOfWeek = [];
    for(let i = 0; i < end; i++) {
        dayOfWeek.push(arr[[i]]);
    }

    console.log(dayOfWeek.join('\n').toString());
}

// func_num("", 7);









// Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.

let ArrayText;
let capsLetters;

function checkArray(array) {
    for(let n in array) {
        console.log(array[n])
    }
}

const returnFirstString = (text) => {
    ArrayText = text.split(" ") || text.split("? "); // это массив всего текста
    capsLetters = text.match(/[А-Я]/g);

    for(let n in capsLetters) {
        for(let i in ArrayText) {
            if(ArrayText[i][0].includes(capsLetters[n])) {
                console.log(ArrayText[i])
            }
        }
    }
};

// returnFirstString('Как вставлять переменную в регулярное выражение? Формируйте регулярное выражение в виде строковой переменной. Содержимое переменной должно быть без слешей.')








// Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

function greetingWithUser(user) {
    let Time = new Date();
    console.log(Time.toLocaleTimeString().split(":")[0]-21)

    // if(Time.toLocaleTimeString().split(":")[0] >= 21) return `Добрый вечер, ` + user

    if(Time.toLocaleTimeString().split(":")[0] >= 0) return `Доброй ночи, ${user}`;
    if(Time.toLocaleTimeString().split(":")[0] >= 4) return `Доброе утро, ${user}`;
    if(Time.toLocaleTimeString().split(":")[0] >= 11) return `Доброй день, ${user}`;
    if(Time.toLocaleTimeString().split(":")[0] >= 18) return `Доброй вечер, ${user}`;
}

// console.log(greetingWithUser('Максим'))






// Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый



// let i_ = 0;

// while (i_ < 101) {
//     if(i_ >= 1 && i_ <= 17) {
//         console.log(i_ + ` - ребенок`)
//     } else if(i_ >= 18 && i_ <= 30) {
//         console.log(i_ + ` - молодой`)
//     } else if(i_ >= 30 && i_ <= 55) {
//         console.log(i_ + ` - зрелый`)
//     } else {
//         console.log(i_ + ` - старый`)
//     }
//     i_++;
// }




// Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции, функцию из прошлого задания






const alertMessage = (name, age) => {
    if(age >= 1 && age <= 17) {
        return `${name} имеет возраст ${age} и он ребенок`;
    } else if(age >= 18 && age <= 30) {
        return `${name} имеет возраст ${age} и он молодой`;
    } else if(age >= 30 && age <= 55) {
        return `${name} имеет возраст ${age} и он зрелый`;
    } else {
        return `${name} имеет возраст ${age} и он старый`;
    }
};




// console.log(alertMessage('Иван', 30))





// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.


// const arrNums = [2, 4, 6, 8];

// function arrayEvenNumbers(array) {
//     let ArrayEven;
//     for(let num in array) {
//         if(array[num] % 2 == 0) ArrayEven = true;
//         else return ArrayEven = false;
//     }

//     return ArrayEven;
// };

// console.log(arrayEvenNumbers(arrNums))





// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.



// const arrNums = [2, 5, 6, 8];

function arrayEvenNumbers(array) {
    let ArrayEven;
    for(let num in array) {
        if(array[num] % 2 == 0) ArrayEven = false;
        else return ArrayEven = true;
    }

    return ArrayEven;
};

// console.log(arrayEvenNumbers(arrNums))







// Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

let ArrayNumbers = [1, 2, 8, 15, 7, 93, 26, 5, 10];

function findMultiplyFive(array) {
    let arr = new Array();
    for(let i in array) {
        if(array[i] % 5 == 0) {
            arr.push(array[i]);
        }
    }
    return arr;
}

// console.log(findMultiplyFive(ArrayNumbers));





// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)



const findAverage = (array) => {
    let sum = array.reduce((first, current) => {
        return first + current;
    })

    const res = sum;

    console.log(res)

    return res / array.length;
};


// console.log(Math.floor(findAverage([1, 2, 4, 5, 6, 7])))







// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент массива в конец (например можно засунуть первый элемент в конец, затем удалить первый элемент), попробуй несколькими способами сделать, если догадаешься

// const obj_arr = [1, 2, 3, 5];

const replaceElements = (array) => {
    
    // array.push(array[0])
    // array.splice(0, 1)

    // return array; < = тоже верно


    let deleted = array.shift()
    array.push(deleted);

    return array;
};

// console.log(replaceElements(obj_arr));





// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массив, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".




const stuffList = [
    {name: "Иван", age: 23},
    {name: "Роман", age: 43},
    {name: "Андрей", age: 18},
];

const displayStuff = (arr) => {
    let resultArr = [];

    for(let i = 0; i < arr.length; i++) {
        resultArr.push(`Имя: ${arr[i]["name"]}, возраст: ${arr[i]["age"]}`)
    }

    return resultArr;
}

// console.log(displayStuff(stuffList));





// --------------------------------



/* 
    У нас есть объект, в котором хранятся зарплаты нашей команды:

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
    Если объект salaries пуст, то результат должен быть 0.
*/




let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const summary = (obj) => {
    let values = Object.values(obj);

    let sum = values.reduce((first, current) => {
        return first + current;
    });

    return sum;
};

// console.log(summary(salaries))









// -----------------------------------------



/* 
    Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

    Например:

    // до вызова функции
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    multiplyNumeric(menu);

    // после вызова функции
    menu = {
        width: 400,
        height: 600,
        title: "My menu"
    };
    Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
    P.S. Используйте typeof для проверки, что значение свойства числовое.
*/


let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj) {
    let values = Object.values(obj);
    let keys = Object.keys(menu)

    for(let i = 0; i < values.length; i++) {
        if(typeof values[i] !== "number") return;

        obj[keys[i]] = values[i] * 2;
    };
};

// multiplyNumeric(menu);
// console.log(menu);



/* 

    Написать объект ladder - объект, который позволяет подниматься вверх и спускаться. Пример работы должен быть таким:

    ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
    ladder.up(); 
    ladder.up();
    ladder.showStep(); // 2
    ladder.down();
    ladder.showStep(); // 1

*/


let ladder = {
    step: 0,

    showStep() {
        console.log(ladder.step);
    },
    up() {
        ladder.step += 1;
    },
    down() {
        ladder.step -= 1;
    },
    
};

// ladder.showStep()
// ladder.up()
// ladder.showStep()





/* 

    Палиндром
    Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
    


    Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

*/

function palindrome(word) {
    word = word.toLowerCase();

    if(word.split('').reverse().join('') == word) return true;
    return false;
};

// console.log(palindrome('olo'))



/* 

    Постановка.

    Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:

    вывод fizz вместо чисел, кратных 3;
    вывод buzz вместо чисел, кратных 5;
    вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

*/

const fizzBuzz = (n) => {
    for(let i = 0; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(`fizzbuzz`);
        } else if(i % 3 === 0) {
            console.log(`fizz`);
        } else if(i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
};

// fizzBuzz(30);



/* 

    Вы сидите в кабинете и видите часы через зеркало. 
    Когда вы смотрите на часы вы видите неправильное время. 

    Вы видите 12:22
    А на самом деле 11:38

    Также и в другое время

    05:25 --> 06:35

    01:50 --> 10:10

    11:58 --> 12:02

    12:01 --> 11:59

    Напишите функцию WhatIsTheTime("time") которая принимает зеркальное время и возвращает нормальное. Значение должно быть в 12 часовом формате.

*/

/* 

    let Watch = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27, 28, 29 , 30],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    ]


*/


// function whatIsTheTime(time) {
//     let bad = time.split(':');
//     let allTime = bad[0] * 3600 + bad[1] * 60;
//     let feTime = 43200 - allTime;
//     let timed = Number((feTime / 3600)).toFixed(0);
//     let minutes = feTime - (timed * 3600);
//     let min = minutes / 60;

//     // if(min < 0) {
//     //     timed--;
//     //     min = 60 + min;
//     // }

//     // if(min < 10) {
//     //     min = '0' + min
//     // }

//     // if(timed == 0) {
//     //     timed = 12;
//     // }

//     // if(timed < 0) {
//     //     timed = 12 + timed;
//     // }

//     // if(timed < 10) {
//     //     timed = '0' + timed;
//     // }

//     return min;
// };


// console.log(whatIsTheTime('4:25'))






/* 

Постановка

Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».

*/



const findLetters = (str) => {
    const needleLetters = ['a', 'e', 'u', 'y', 'i', 'o'];
    let count = 0;

    for(let char of str.toLowerCase()) {
        if(needleLetters.includes(char)) {
            count++;
        }
    }


    /* 
    for(let i = 0; i <= str.split('').length; i++) {
        if(i == str.split('').length) {
            return count;
        }
        for(let k in needleLetters) {
            if(str.split('')[i].includes(needleLetters[k])) {
                count++;
            }
        }
    }
    
    */
    
    return count;
}

// console.log(findLetters('test'))









/* 


Фибоначчи

Классическая задача, которую можно встретить на собеседованиях самого разного уровня. Стоит напомнить, что последовательность Фибоначчи — это ряд чисел, где каждое последующее является суммой двух предыдущих. Так, первые десять чисел выглядят следующим образом: 0, 1, 2, 3, 5, 8, 13, 21, 34.

Постановка

Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности, причем n — число, которое передается в качестве аргумента функции.

fibonacci(3) // --> 2


*/
const fibonacci = num => {
    // store the Fibonacci sequence you're going
    // to generate inside an array and
    // initialize the array with the first two
    // numbers of the sequence
    const result = [0, 1]
   
    for(let i = 2; i <= num; i++) {
      // push the sum of the two numbers
      // preceding the position of i in the result array
      // at the end of the result array
      const prevNum1 = result[i - 1]
      const prevNum2 = result[i - 2]
      result.push(prevNum1 + prevNum2)
    }
    // return the last value in the result array
    return result[num]
}

// console.log(fibonacci())




/* 

Дан массив, содержащий объекты с именами.
Нужно вернуть строку, отформатированную в виде списка имен, разделенных 
запятыми, за исключением двух последних имен, которые должны быть разделены 
амперсандом.

*/



function list(names) {
    const f = () => {
        for(let i in names) {
            return names[i]
        }

    }

    return f()
    // let arr = [];
    // for(let i = 0; i < names.length; i++) {
    //     for(let w in names[i]) {
    //         arr.push(names[i][w])
    //     }
    // }

    // for(let i = 0; i <= arr.length; i++) {
        
    // }
}

// 'Bart, Lisa & Maggie'
console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]))

// 'Bart & Lisa'
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))

// 'Bart'
console.log(list([ {name: 'Bart'} ]))

// ''
console.log(list([]))
