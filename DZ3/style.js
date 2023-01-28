// 1 ==================================================================================================== //

let arr = [9, 2, -11, 45, 99, 56, 44, 37, 89];

let a = Math.max(...arr);

let b = Math.min(...arr);

let result = a - b;

if (arr.length <= 1) {

    result = 0;
};

console.log(a);
console.log(b);
console.log(result);

// 2 ==================================================================================================== //

const words = ['orange', 'banana', 'apple', 'papaya', 'strawberry', 'pineapple'];

const result = words.filter(word => word.length > 6);

console.log(result);

// 3 ==================================================================================================== //

function solution(str, ending) {

    return str.split('').filter((_, i) => i >= str.length - ending.length).join('') == ending ? true : false;
}

console.log(solution("125", "5"));

// 4 ==================================================================================================== //

function avg(arr) {
    let result = [];

    if (!arr) {

        return result;
    }
    for (let i = 0; i < arr.length - 1; i++) {

        result.push((arr[i] + arr[i + 1]) / 2);
    }
    return result;
}
console.log(avg([6, 9, 4, 7, 2, 4, 5, 8]));

// 5 ==================================================================================================== //

function countVowel(str) {

    const count = str.match(/[aeiou]/gi).length;

    return count;
}
console.log(countVowel("Palm"));

//========================================================= //

function removeABC(str) {

    let newStr = str.replace(/[abc]/gi, "");

    return newStr === str ? null : newStr;
}
console.log(removeABC("This might be a bit hard"));

// 6 ==================================================================================================== //

function difference(arra1, arra2) {

    if ((arra1 == null) || (arra2 == null))
        return void 0;

    const obj = {};

    for (let i = arra1.length - 1; i >= 0; --i)
        obj[arra1[i]] = arra1[i];

    for (let i = arra2.length - 1; i >= 0; --i)
        obj[arra2[i]] = arra2[i];

    const res = [];

    for (const n in obj) {

        if (obj.hasOwnProperty(n))
            res.push(obj[n]);
    }

    return res;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// 7 ==================================================================================================== //

function invert_key_value(obj) {
    let result = {};
    let keys = _keys(obj);
    for (let i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
}
function _keys(obj) {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    let keys = [];
    for (let key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
}
function isObject(obj) {
    let type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
console.log(invert_key_value({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// 8 ==================================================================================================== //

function calculateDifference(obj, limit) {

    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }

    return Math.abs(sum - limit);
}
console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

// 9 ==================================================================================================== //

const brickFit = (a, b, c, d, e) => {
    if (a <= d && c <= e) {
        return true;
    } else return false;
};

console.log(brickFit(1, 1, 1, 1, 1));
console.log(brickFit(1, 2, 1, 1, 1));
console.log(brickFit(1, 2, 2, 1, 1));

// 10 ==================================================================================================== //

let fullPath = 'c:\\WebServers\\home\\testsite\\www\\myfile.txt';
let pathArray = fullPath.split('\\');
let fileName = pathArray.pop().split('.')[0];
console.log(fileName);

// 11 ==================================================================================================== //

function isSubstring(str1, str2) {
    return str2.includes(str1);
}
console.log(isSubstring("Kate love js", "loVe JS Kate"))

// 12 ==================================================================================================== //

let a = [1, 2, 3, 4, 5, 6];
function sort(a) {
    let b = [];
    let c = [];

    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            b[b.length] = a[i];

        } else {

            c[c.length] = a[i];

        }
    } return [b, c];
}
console.log(sort(a));

// 13 ==================================================================================================== //

function formatString(str) {

    let words = str.split(" ");

    let referenceRegex = /^@\w+/;

    let emailRegex = /\S+@\S+\.\S+/;

    let urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (referenceRegex.test(word)) {
            words[i] = "[посилання заборонено]";
        }

        if (emailRegex.test(word)) {
            words[i] = "[контакти  заборонені]";
        }

        if (urlRegex.test(word)) {
            words[i] = "[посилання заборонено]";
        }
    }
    words = words.filter(word => !(word.length > 3 && /^\d+$/.test(word)));

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (i === 0) {
            words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
            words[i] = word.toLowerCase();
        }
    }
    return words.join(" ");
}
console.log(formatString("smt 1234 fdkjlvb@fdvn.com https://www.google.com/"))

// 14 ==================================================================================================== //

function balance(str) {

    let regex = /\(\)/g;

    if (str === '') return true;

    while (true) {

        if (!regex.test(str)) break;

        str = str.replace('()', '');
    }

    return !str ? true : false;
}
console.log(balance("((())"));

// 15 ==================================================================================================== //

function generatePassword() {
    let length = Math.floor(Math.random() * (20 - 6 + 1) + 6);
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
    const charactersLength = characters.length;
    let countUpperCase = 0;
    let countDigits = 0;
    let isTwoDigitsInARow = false;

    for (let i = 0; i < length; i++) {
        let randomChar = characters.charAt(Math.floor(Math.random() * charactersLength));
        result += randomChar;
        if (randomChar >= 'A' && randomChar <= 'Z') {
            countUpperCase++;
        }
        if (randomChar >= '0' && randomChar <= '9') {
            countDigits++;
            if (i > 0) {
                let prevChar = result.charAt(i - 1);
                if (prevChar >= '0' && prevChar <= '9') {
                    isTwoDigitsInARow = true;
                }
            }
        }
    }

    if (countUpperCase < 2 || countDigits > 5 || isTwoDigitsInARow || !result.includes('_')) {
        return generatePassword();
    }
    return result;
}

console.log(generatePassword());

// 16 ==================================================================================================== //

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let newArray = new Array(array.length);
let left = 0;
let right = array.length - 1;

array.sort((a, b) => a - b);

for (let i = 0; i < newArray.length; i++) {
    if (i % 2 === 0) {
        newArray[left] = array[i];
        left++;
    } else {
        newArray[right] = array[i];
        right--;
    }
}
console.log(newArray);
