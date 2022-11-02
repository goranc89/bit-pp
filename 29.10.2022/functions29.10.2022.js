/*1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 ->false*/

/*var inputt;
function isString(inputt) {
    if (typeof inputt === 'string') {
        return true;
        } else {
            return false;
        }
}
var sprovedi = isString("hvjh");
console.log(sprovedi);*/

/*2. Write a function to check whether a string is blank or not.
&quot;My random string&quot; -&gt; false
&quot; &quot; -&gt; true
12 -&gt; false
false -&gt; false*/

/*var inputt;
function isString(inputt) {
    if (inputt === "") {
        return true;
        } else {
            return false;
        }
}
var sprovedi = isString(false);
console.log(sprovedi);*/

/*3. Write a function that concatenates a given string n times (default is 1).
&quot;Ha&quot; -&gt; &quot;Ha&quot;
&quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot;*/

/*function concString(string, num) {
    var sum = "";
    for (i = 0; i < num; i++) {
        sum += string;
    }
    return sum;
}
var concString = concString("Ha", 4);
console.log(concString);*/

/*4. Write a function to count the number of letter occurrences in a string.
&quot;My random string&quot;, &quot;n&quot; -&gt; 2*/

/*function calcNumOfApp(string, char) {
    var upA = 0; lowA = 0;
    
    for (i = 0; i < string.length; i++) {
        if (string[i] == char.toLowerCase()) {
            lowA++;
        }
        if (string[i] == char.toUpperCase()) {
            upA++;
        }
    }
    return "Number of appearances of lowercase a is " + lowA + 
            " and uperrcase A is " + upA + ", both upper and lower " + (lowA + upA) + ".";
    }
var str = calcNumOfApp("salalalalaAA", "A");
    console.log(str);*/

/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.*/

/*function findPos(string, char) {
    var num;
    for (i = 0; i < string.length; i++) {
        if (string[i] == char) {
            return num = i + 1;
        } else {
            return -1;
        }
    }
}
var sprovedi = findPos("asfdhzhkl", "d");
console.log(sprovedi);*/

/*function probaString(text, char) {
    var result = text.indexOf(char);
    return result + 1;
}

var probaString = probaString("ovaj tekst je proba", "p")
console.log(probaString);*/


/*6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.*/

/*function probaString(text, char) {
    var result = text.lastIndexOf(char.toLowerCase());
    return result + 1;
}

var probaString = probaString("ovaj tekst je proba", "A")
console.log(probaString);*/

/*7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
&quot;My random string&quot; -&gt; [&quot;M&quot;, &quot;y&quot;, null, &quot;r&quot;, &quot;a&quot;]
&quot;Random&quot; -&gt; [&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;]*/

/*function convString(string) {
    var arr = [...string];
        for (i = 0; i < arr.length; i++) {
        if (arr[i] == " ") {
            arr[i] = null;
        }
    }
    return arr;
}
var sprovedi = convString("agstd jsjsjs jhg");
console.log(sprovedi);*/ //da li je ovo ispravan zadatak? Da li mogu da se varijable koriste dalje?

/*8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/

/*function prime(num) {
    for (i = 2; i < num; i++) {
        if ( num % i != 0) {
            return "The number " + num + " is prime number!";
        }  else {
            return "The number " + num + " is not prime number!";
        }
    }
}
var sprovedi = prime(100);
console.log(sprovedi);*/

/*9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
&quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
&quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
&quot;My random string&quot; -&gt; &quot;My-random-string&quot;*/

/*function replaceEmpty(string, char) {
    var string  = [...string]
        for (i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            string[i] = char;
        }
    }
    return string;
}
var sprovedi = replaceEmpty("agstd jsjsjs jhg", "/");
console.log(sprovedi.join(''));*/

/*10. Write a function to get the first n characters and add “...” at the end of newly created string.*/

/*function shortString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
}
var sprovedi = shortString("agstd jsjsjs jhg", 7);
console.log(sprovedi);*/

/*11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
[&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity] -&gt; [1, 21, 42, 1000]*/

function filterNumber(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
    }
    for (i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    nums = arr.filter(Number);
    return "[" + nums.join(", ") + "]";
}
var sprovedi = filterNumber(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(sprovedi);

/*12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.*/

/*function retirement(dobirth, gender) {
    const retMen = 65; const retWomen = 60;
    var yearM; var yearsF;
    if (gender == "m") {
        yearM = 65 - (2022 - dobirth);
        if (yearM < 0) {
            return "The person is already in retirement!";
        }
        return yearM;
    } else if (gender == "f") {
        yearsF = 60 - (2022 - dobirth);
        if (yearsF < 0) {
            return "The person is already in retirement!";
        }
        return yearsF;
    }
}
var sprovedi = retirement(1980, "m");
console.log(sprovedi);*/

/*13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -&gt; 1st
11 -&gt; 11th*/

/*function humanizeNumber(number) {
    if(number % 100 >= 11 && number % 100 <= 13)
            return number + "th";
        switch(number % 10) {
            case 1: return number + "st";
            case 2: return number + "nd";
            case 3: return number + "rd";
        }
        return number + "th";
}
var sprovedi = humanizeNumber(87);
console.log(sprovedi);*/