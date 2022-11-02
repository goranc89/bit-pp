/*1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]*/

/*function convString(arr) {
        for (i = 0; i < arr.length; i++) {
            arr[i] = parseFloat(arr[i]);
        }
        for (i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
        nums = arr.filter(Number);
        return "[" + nums.join(", ") + "]";
}
var sprovedi = convString(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(sprovedi);*/

/*2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: “015false-2247”*/

/*function joinElem(arr) {
    newArr = [];
    for ( i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i] != undefined && arr[i] != null && arr[i] != Infinity) {
            newArr.push(arr[i]);
        }
    }
    string = "";
    for ( i = 0; i < newArr.length; i++) {
            string += newArr[i];
        
    }
    return string;
}
var sprovedi = joinElem([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(sprovedi);*/

/*3. Write a program to filter out falsy values from the array.
Input: [[NaN, 0, 15, false, -22, '', undefined, 47, null]]
Output: [15, -22, 47]*/

/*function filterElem(arr) {
    nums = arr.filter(Number);
    return "[" + nums.join(", ") + "]";
}
var sprovedi = filterElem([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(sprovedi);*/

/*4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3*/

/*function calcInt(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
        newArr.push(arr[i]);
    }
    }
    console.log(newArr);
    return newArr.length;
}
var sprovedi = calcInt([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(sprovedi);*/

/*5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 2*/
function calcFloat(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
        newArr.push(arr[i]);
    }
    }
    nums = newArr.filter(Number);
    return nums.length;
}
var sprovedi = calcFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(sprovedi);