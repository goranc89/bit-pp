/*1. Write a program that calculates the maximum of two given numbers.*/

/*function max(num1, num2) {
    if (num1 > num2) {
        return "Maximum is num1!"
    } else {
        return "Maximum is num2!"
    }
}

var maximum = max(15, 7);
console.log(maximum);*/

/*2. Write a program that checks if a given number is odd.*/

/*function oddNumber(num) {
    if (num % 2 == 0) {
        return "Number is odd!"
    } else {
        return "Number is not odd!"
    }
}
 var number = oddNumber(79);
 console.log(number);*/

/*3. Write a program that checks if a given number is a three digit long number.*/

/*function threeDigits(num) {
    var string = toString(num);
    if ( string.length == 3) {
        return "Number has three digits!";
    } else {
        return "Number do not has three digits!";
    }
}
var number = threeDigits(1234);
console.log(threeDigits());*/

/*4. Write a program that calculates an arithmetic mean of four numbers.*/

/*function arithmeticMean(num1, num2, num3, num4) {
    var avg = (num1 + num2 + num3 + num4) / 4;
    return "Average of given numbers is " + avg;
}

var average = arithmeticMean(1, 4, 7, 87);
console.log(average);*/


/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
***** */

function squarePrint(num) {
    var string = "";
    for (i = 0; i < num; i++){
        for (j = 0; j < num; j++) {
            if(i===0 || i=== num-1){
                string += "*";
            }else{
                if(j ===0 || j === num-1){
                    string += "*";
                }else{
                    string += " ";
                }
            }
        }
        string += "\n";
    }
    return string;
}
var number = squarePrint(5);
console.log(number);


/*6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *  */

/*function graphPrint(num1, num2, num3) {
    var str1 = ""; str2 = ""; str3 = "";
    for (i = 0; i < num1; i++) {
        str1 += "*";
    }
    str1 += "\n";
    for (i = 0; i < num2; i++) {
        str2 += "*";
    }
    str2 += "\n";
    for (i = 0; i < num3; i++) {
        str3 += "*";
    }
    str3 += "\n";
    return str1 + str2 + str3;
}
var graph = graphPrint(5, 3, 7);
console.log(graph);*/

/*7. Write a program that calculates a number of digits of a given number.*/

/*function numDigits(num) {
    var string = num.toString();
    var numOfDig = string.length;
    return "Given number has " + numOfDig + " digits!";
}
var number = numDigits(1234);
console.log(number);*/

/*8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3*/

/*function numOfApp(num, arr) {
    var j = 0;
    for (i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            j++;
        }
    }
    return "Number of appearances of number " + num + " in array is " + j;
}
var execute = numOfApp(3, [1, 3, 6, 7, 3, 10, 11]);
console.log(execute);*/

/*9. Write a program that calculates the sum of odd elements of a given array.*/

/*function calcSumOdd(arr){
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return "The sum of odd numbers in given array is " + sum;
}
var sumOfOdd = calcSumOdd([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(sumOfOdd);*/

/*10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/

/*function calcNumOfApp(string) {
    var upA = 0; lowA = 0;
    
    for (i = 0; i < string.length; i++) {
        if (string[i] == "a") {
            lowA++;
        }
        if (string[i] == "A") {
            upA++;
        }
    }
    return "Number of appearances of lowercase a is " + lowA + " and uperrcase A is " + upA;
    
}
var str = calcNumOfApp("salalalalaAA");
    console.log(str);*/

/*11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.*/

/*function concString(string, num) {
    var sum = "";
    for (i = 0; i < num; i++) {
        sum += string;
    }
    return sum;
}
var concString = concString("abc", 4);
console.log(concString);*/
