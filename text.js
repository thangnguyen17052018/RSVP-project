function findAMonsterByAttack(monsters) {
    
    var monsters = [
        {
            name: 'Cá heo',
            attack: 50,
            speed: 100,
            hitpoint: 100,
        },
        {
            name: 'Khủng long',
            attack: 100,
            speed: 80,
            hitpoint: 180,
        },
    ];
    var result = monsters.find(function (value){
        return value.attack === 150;
    });
    if (typeof result == 'undefined'){
        result = null;
    } 
    console.log(result);
 return result;
 }

 // Làm bài tập tại đây

const findEqualValues = (array1, array2) => {
    var array = [];
    array1.forEach(function(value){
        if (array2.some(function(val){
          return  value === val; 
        })){
            array.push(value);
        }
    });
    return array;
}

const array1 = ['abc', 'baaaa', 'cDAddc'];

array1.forEach(element => console.log(element));

Array.prototype.forEach2 = function(fn){
    let currentArray = this;
    let thisLength = this.length;
    for (let i = 0; i < thisLength; i++){
        fn(this[i], i, this);
        console.log(i);
    }
}

array1.forEach2(element => console.log(element));

// Array.prototype.find2 = function(fn){
//     let currentArray = this;
//     let thisLength = this.length;
//     for (let i = 0; i < thisLength; i++){
//         if (fn(this[i])){
//             return this[i];
//         }
//     }
// return undefined;
// }

// console.log(array1.find(element => element === 'd'));
// console.log(array1.find2(element => element === 'a'));

// Array.prototype.filter2 = function(fn){
//     let currentArray = this;
//     let thisLength = this.length;
//     let newArray = [];
//     for (let i = 0; i < thisLength; i++){
//         if (fn(this[i])){
//             newArray.push(this[i]);
//         }
//     }
// return newArray;
// }

// const result = array1.filter(element => element.length > 4);
// console.log(result);
// const result1 = array1.filter2(element => element.length > 4);
// console.log(result1);

// Array.prototype.some2 = function(fn) {
//     let currentArray = this;
//     let thisLength = this.length;
//     for (let i = 0; i < thisLength; i++){
//         if (fn(this[i])){
//             return true;
//         }
//     }
// return false;
// }
// const result2 = array1.some(element => element.length > 3);
// console.log(result2);
// const result3 = array1.some2(element => element.length > 3);
// console.log(result3);

// Array.prototype.every2 = function(fn){
//     let currentArray = this;
//     let thisLength = this.length;
//     for (let i = 0; i < thisLength; i++){
//         if (!fn(this[i])){
//             return false;
//         }
//     }
// return true;
// }

// const result4 = array1.every(element => element.length > 2);
// console.log(result4);
// const result5 = array1.every2(element => element.length > 2);
// console.log(result5);

// Array.prototype.reduce2 = function(fn, initial){
//     let currentArray = this;
//     let thisLength = this.length;
//     let total;
//     if (typeof initial === 'undefined'){
//         total = currentArray[0];
//     } else {
//         total = currentArray[0] + initial;
//     }
//     for (let i = 1; i < thisLength; i++){
//         total = fn(total, currentArray[i], i, currentArray);
//     }
// return total;
// }

// const array2 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array2.reduce(reducer));
// console.log(array2.reduce2(reducer));
