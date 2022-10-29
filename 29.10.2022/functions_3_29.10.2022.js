/*1. Write a program to insert a string within a string at a particular position (default is 1,
    beginning of a string).
    &quot;My random string&quot;, &quot;JS &quot; -&gt; &quot;JS My random string&quot;
    &quot;My random string&quot;, &quot;JS &quot;, 10 -&gt; My random JS string&quot;*/

/*function insertString(str1, str2, pos) {
    if (pos > 1) {
    var string = str1.slice(0, pos) + str2 + str1.slice(pos, str1.length);
    return string;
}
else {
    pos = 1;
    var string = str1.slice(0, pos) + str2 + str1.slice(pos, str1.length);
    return string;
}
}
var sprovedi = insertString("jhzgvhfghv", " jsJS ", -2);
console.log(sprovedi);*/

/*2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]*/

/*function joinElem(arr) {
    string = "";
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] != NaN && arr[i] != undefined && arr[i] != null && arr[i] != Infinity) {
            string += arr[i];
        }
    }
    return string;
}
var sprovedi = joinElem([undefined, 0, 15, null, false, "37", null]);
console.log(sprovedi);*/

/*3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] -&gt; [15, -22, 47]*/

/*function filterNumber(arr) {
    newArr = [];
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] != NaN && arr[i] != undefined && arr[i] != null && arr[i] != Infinity) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var sprovedi = filterNumber(["21", undefined, "4", null, "78"]);
console.log(sprovedi);*/

/*4. Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number*/

/*function reverseNumber(num) {
    var revNum = parseInt(num.toString().split('').reverse().join(''));
    return revNum
}
var sprovedi = reverseNumber(12345);
console.log(sprovedi);*/

/*5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
last &#39;n&#39; elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]*/

/*function lastElem(arr, n) {
    newArr = [];
    for (i = arr.length - n; i < arr.length; i++) {
        newArr.push(arr[arr.length - i]);
    }
    return newArr;
}
var sprovedi = lastElem([0, 5, 8, 9, 15], 2);
console.log(sprovedi);*/ //NE RADI DOBRO

/*function lastElem(arr, n) {
    newArr = arr.slice(-n);
    return newArr;
}
var sprovedi = lastElem([0, 5, 8, 9, 15], 2);
console.log(sprovedi);*/

/*6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -&gt; [0, 0, 0, 0, 0, 0]
2, &quot;none&quot; -&gt; [&quot;none&quot;, &quot;none&quot;]
2 -&gt; [null, null]*/

/*function creatArr(n, elem) {
    arr = [];
    for (i = 0; i < n; i++) {
        arr.push(elem);
    }
    return arr;
}
var sprovedi = creatArr(6, "Ho");
console.log(sprovedi);*/

/*7. Write a function that says whether a number is perfect.
28 -&gt; 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.*/

/*function perfectNumber(num) {
    dividors = [];
    sumDiv = 0;
    for (i = 1; i < num; i++) {
        if (num % i == 0) {
            dividors.push(i);
            sumDiv += i;
        }
    } 
    if (sumDiv == num) {
        return num + " is perfect number!";
    } else {
        return num + " is not perfect number!";
    }
}
var sprovedi = perfectNumber(46);
console.log(sprovedi);*/

/*8. Write a function to find a word within a string.
&#39;The quick brown fox&#39;, &#39;fox&#39; -&gt; &quot;&#39;fox&#39; was found 1 times&quot;
&#39;aa bb cc dd aa&#39;, &#39;aa&#39; -&gt; &quot;&#39;aa&#39; was found 2 times&quot;*/

/*function findWord(string, word) {
    var x = 0, y = 0;

    for (i = 0; i < string.length; i++) {
        if (string[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (string[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}
var sprovedi = findWord("aa vv cc dd ee aa", "aa");
console.log(sprovedi);*/

/*9. Write a function to hide email address.
&quot;myemailaddress@bgit.rs&quot; -&gt; &quot;mye...@bgit.rs&quot;*/

/*function hideMail(email) {
    var string = email.slice(0, 3) + "...@bgit.rs";
    return string;
}
var sprovedi = hideMail("sasajovkovic@gmail.com");
console.log(sprovedi);*/

/*10. Write a program to find the most frequent item of an array.
[3, &#39;a&#39;, &#39;a&#39;, &#39;a&#39;, 2, 3, &#39;a&#39;, 3, &#39;a&#39;, 2, 4, 9, 3]*/

function maxAppearance(arr) {
    let mf = 1;
  let m = 0;
  let item;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        m++;
        if (m > mf) {
          mf = m;
          item = arr[i];
        }
      }
    }
    m = 0;
  }
  return item;
}
var sprovedi = maxAppearance([3, 'a', 'a', 'a', 56, 3, 'a']);
console.log(sprovedi);