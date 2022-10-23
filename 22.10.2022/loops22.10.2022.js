/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/

/*var it = 15; 
for (var i = 1; i <= it; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even number!");
    } else {
        console.log(i + " is odd number!");
    }
}*/

/*2. Write a program to sum the multiples of 3 and 5 under 1000.*/
/*var it = 1000; var m1 = 3; var m2 = 5;  sum = 0;

for (i = 0; i < it; i++) {
    if (i % m1 ===  0) {
        if (i % m2 === 0) {
            sum += i;
        }
    }
}
console.log(sum);*/

/*3. Write a program that will iterate from 0 to 10 and display squares of numbers.*/

/*var it = 10; 
for (i = 0; i <= it; i++) {
    console.log(i*i);
}*/

/*4. Write a program to compute the sum and product of an array of integers.*/

/*var arr = [2, 5, 8, 10, 15]; sum = 0; product = 1;
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
}
console.log(sum);
console.log(product);*/


/*5. Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];*/

/*var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined]; var s = "";

for (i = 0; i < x.length; i++) {
    s += x[i] + "";
}
console.log(s);*/

/*6. Write a program that prints the elements of the following array.
var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];*/
/*var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];

for (i = 0; i < a.length; i++) {
    for (j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}*/

/*7. Write a program that outputs the sum of squares of the first 20 numbers.*/

/*var it = 20; square = 1; sum = 0;
for (i = 1; i <= it; i++) {
    square *= i;
    sum += square;
}
console.log(sum);*/

/*8. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68

The grades are computed as follows :

&lt; 60% F
&lt; 70% D
&lt; 80% C
&lt; 90% B
&lt; 100% A*/

/*var grades = [["David", 80], ["Marko", 77], ["Dany", 88], ["John", 95], ["Thomas", 68]]; sum  = 0.0; avg = 0.0;

for (i = 0; i < grades.length; i++) {
    sum += grades[i][1];
}
avg = sum / grades.length;
if(avg < 60){
    console.log("F");
}
else if(avg < 70 && avg > 60){
    console.log("D");
}
else if(avg < 80 && avg > 70){
    console.log("C");
}
else if(avg < 90 && avg > 80){
    console.log("D");
}
else if(avg < 90 && avg > 100){
    console.log("B");
}
else{
    console.log("A")
}*/


/*9. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print Fizz instead of the number, and for numbers
divisible by 5 (and not 3), print Buzz instead. When you have that working, modify your
program to print FizzBuzz, for numbers that are divisible by both 3 and 5 (and still print
Fizz or Buzz for numbers divisible by only one of those).*/
/*var it = 100; var m1 = 3; var m2 = 5;  sum = 0;

for (i = 1; i <= it; i++) {
    
    if (i % 3 ==  0) { // da li treba da bude deljivo samo sa 3?
        console.log("Fuzz!");
    }
    if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz!");
    }
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz!");
    }
    console.log(i);
}*/

/*
1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/

/*var a = [5, -4.2, 3, 7]; e = 3; aa = [5, -4.2, 18, 7]

for (var e in a) {
    console.log("yes");
}
for (var e in aa) {
    console.log("no");
}*/

/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

/*var arr = [-3, 11, 5, 3.4, -8]; a = [];

for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        arr[i] = arr[i] * 2;
    }
    a.push(arr[i]);
}
    console.log("[" + a.join(', ') + "]");*/

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

/*var arr = [4, 2, 2, -1, 6]; min = arr[0]; index = 0;
for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
        index = i;
    }
}
console.log(min + ", " + index);*/



/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/

/*var arr = [4, 2, 2, -1, 6]; min = arr[0]; secondMin = arr[0];
for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
}
for (i = 0; i < arr.length; i++) {
    if (secondMin > arr[i] && arr[i] > min) {
        secondMin = arr[i];
    }
}

console.log(secondMin);*/

/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

/*var arr = [3, 11, -5, -3, 2]; sum = 0;

for ( i =0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
 console.log(sum);*/

/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

var arr = [2, 4, -2, 7, -2, 4, 2]; sym = true; 

for (i = 0; i < arr.length; i++) {
   if (arr[i] != arr[arr.length - 1 - i]) {
        sym = false;
   }
}

if (sym == true) {
    console.log("The array is symmetric.");
} else {
    console.log("The array is not symmetric.");
}


/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

/*var a = [4, 5, 6, 2]; aa = [3, 8, 11, 9]; arr = [];

for (i = 0; i < a.length; i++) {
    arr.push(a[i]);
    arr.push(aa[i]);
}
console.log("[" + arr.join(', ') + "]");*/

/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

/*var a = [4, 5, 6, 2]; aa = [3, 8, 11, 9]; arr = [];

for ( i = 0; i < a.length; i++) {
    arr.push(a[i]);
}
for ( i = 0; i < aa.length; i++) {
    arr.push(aa[i]);
}
console.log("[" + arr.join(', ') + "]");*/

/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]

Output array: [4, 6, 8]*/

/*var e = 2; a = [4, 6, 2, 8, 2, 2]; newA = [];

for (i = 0; i < a.length; i++) {   
    if (a[i] != e) {
       newA.push(a[i]);
    }
}
for (i = 0; i < newA.length; i++) {   
    console.log(newA[i]);
}
console.log("[" + newA.join(', ') + "]");*/


/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

/*var e = 78; p = 10; a = [2, -2, 33, 12, 5, 8]; newA = [];

if (p > a.length) {
    console.log("Error! New element index is greater than array's length");
} else {
    for (i = 0; i < p; i++) {
        newA.push(a[i]);
    }
    newA.push(e);
    for (i = p + 1; i < a.length + 1; i++) {
        newA.push(a[i - 1]);
    }
    /*for (i = 0; i < a.length; i++) {
    console.log(a[i]);
} 
console.log("********************************");
for (j = 0; j < newA.length; j++) {
    console.log(newA[j]);
} 
console.log(...newA);
    console.log("[" + newA.join(', ') + "]");
}*/






