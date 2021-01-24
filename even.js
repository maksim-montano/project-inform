/* 
    * Мой GitHub: https://github.com/maksim-montano/
    * GitHub этого проекта: https://github.com/maksim-montano/project-inform
    * Pastebin JS: https://pastebin.com/NXYW1Bmi
    * Pastebin Python: https://pastebin.com/P4tBAwev
*/


// < ========= [Либы] ========= > //



// < ===== [ Переменные ] ===== > //

let ArrayNumbers = [];
let EvenNumbers = [];
let EvenIndexes = [];

// < ==== [Functions] ==== > // ;

let GetRandomInt = (min, max) => {
    Math.ceil(min);
    Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// < ======================= > // 



// < ==== [ EVEN.JS ] ==== > //

for(let i = 0; i < 6; i++) {

    if(ArrayNumbers.length == 5) {
        for(let numb in ArrayNumbers) {
            let index = ArrayNumbers.indexOf(ArrayNumbers[numb]);

            // поиск четных индексов:
            if(numb % 2 == 0) {
                EvenIndexes.push(ArrayNumbers[numb] + `(index: ${numb})`)
            }

            // поиск чисел, кратных 4:
            if(ArrayNumbers[numb] % 4 == 0) {

                if(EvenNumbers.includes(ArrayNumbers[numb])) { // если есть совпадения по значению в массиве EvenNumbers
                    let index = EvenNumbers.indexOf(ArrayNumbers[numb]) // находим индекс второго совпадающего элемента, и удаляем его
                    EvenNumbers.splice(index, 1)
                }

                EvenNumbers.push(ArrayNumbers[numb]);
            }

            if(index == 4) {
                if(EvenNumbers.length == 0) EvenNumbers.push(`не найдено`);
                if(EvenIndexes.length == 0) EvenIndexes.push('не найдено');
            } // если индекс элемента "ArrayNumbers[numb]" == 4, значит перебор элементов был закончен, и далее элементы в массив не будут добавляться. Соответственно, если какой-то массив пустой, то значит, что элементы по определенному "фильтру" не были найдены
        }
    }

    if(i < 5) {
        ArrayNumbers.push(GetRandomInt(10, 100));
    }

}

console.log(`Ваш массив рандомно сгенерированный массив чисел: [${ArrayNumbers.join(", ")}]`);
console.log(`Минимальное значение: ` + Math.min.apply(null, ArrayNumbers));
console.log(`Кратные 4: ${EvenNumbers.sort((a, b) => a - b).join(', ')}`);
console.log(`Четные индексы: ${EvenIndexes.join(', ')}`);
