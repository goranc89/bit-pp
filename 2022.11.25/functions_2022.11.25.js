/*INSTRUCTIONS: All tasks needs to be done as regular function and after that as anonymous function!!!
    
1. Write a function that checks if a given string contains 5 digits.
Input: “1b8952abd” 
Output: true*/

/*function checkDigit(string) {
    var str = [...string];
    var j = 0;
    for (i = 0; i < str.length; i++) {
        if (/[0-9]/.test(str[i])) {
            j++;
        }
    }
    if (j >= 5) {
        return true;
    } else {
        return false;
    }
}
console.log(checkDigit("1b8952abd"));*/

/*1A. Modify previous task to check if it contains char or number "5". 
Input: “1bser9re”
Output: false*/

/*function checkDigit(string) {
    var str = [...string];
    var j = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === 5 || str[i] === "5") {
            j++;
        }
    }
    if (j > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkDigit("1b8952abd"));*/

/*2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”*/

/*function replace(string) {
    return string.replace("JS", "**");
}
console.log(replace("Programming in JS is super interesting!"));*/

/*3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” */

/*function insertChar(string, n, char) {
    return string.slice(0, n - 1) + char + string.slice(n - 1, string.length);
}
console.log(insertChar("Goo morning", 4, "d"));*/

/*4. Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!” */

/*function delChar(string, n) {
    return string.slice(0, n) + string.slice(n + 1, string.length);
}
console.log(delChar("Goodd morning", 3));*/

/*5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]*/

/*function delSecond(arr) {
    var newArr = [];
    newArr = function() {
    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr.push(arr[i]);
        }
    }
return newArr;
} ();
    return "[" + newArr.join(", ") + "]";
}
console.log(delSecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));*/

/*INSTRUCTIONS: All tasks needs to be done as regular function and after that as anonymous function!!!
   
   6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]*/

/*function doubleVal(arr, i1, i2) {
    var newArr = [];
    for (i = i1; i <= i2; i++ ) {
        newArr.push(2 * arr[i]);
    }
    return "[" + arr.slice(0, i1).join(", ") +", " + newArr.join(", ") +", " + arr.slice(i2 + 1).join(", ") +"]";
}
console.log(doubleVal([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 ));*/


/*    7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true*/

// function checkElem(arr1, arr2) {
//     var result = arr1.every(element => {
//         return arr2.indexOf(element) !== -1;
//       });
//       return result;
// }
// console.log(checkElem([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));


/*    8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
 let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
*/

// function sortArr(arr) {
//     function countt(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == "a" || str.charAt(i) == "A") {
//             count += 1;
//         }
//     }
//     return count;
// }
// return arr.sort(function(a, b){
//     console.log(a + "" + b);
//     return
//     var a_a = a.countt(a); 

//     var b_a = b.countt(b);
// return a_a - b_a;});
//     }
// var array_strings = ["apple","tea","amazing","morning","JavaScript"];
// array_strings.sort(function(a, b){
//   var a_length = a.split('a').length;
//   var b_length = b.split('a').length;
//   return a_length - b_length;
// });
// return array_strings;

// }
// console.log(sortArr(["apple", "tea", "amazing", "morning", "JavaScript"]));

/*    9. Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. */

// function writeDate() {
//     var date = new Date();
//     var day = date.getDate() - 1;
//     var month = date.getMonth() + 1;
//     var year = date.getFullYear();
//     return `${day}.${month}.${year}`;

// }
// console.log(writeDate());

/*    10. Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018. */

// function writeDate() {
//     var date = new Date();
//     var day = date.getDate() + 1;
//     var month = date.getMonth() + 1;
//     var year = date.getFullYear();
//     return `${day}.${month}.${year}`;

// }
// console.log(writeDate());


/*    11. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
  78
 111 
   4
4321*/
function writeNumbers(arr) {
    var max = 0;
    var newArr = [];
    for (i = 0; i < arr.length; i++ ) {
        arr[i] = arr[i].toString();
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    for (i = 0; i < arr.length; i++ ) {
        for (j = 0; j < arr[i].length; j++) {
            var blank = (max - arr[i].length);
            var str = " ";
            
        }
        newArr.push(str.repeat(blank) + arr[i]);
    }
    return newArr.join("\n");
}
console.log(writeNumbers([78, 111, 4, 4321]));