/*1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
pokrene.*/

/*function randomPrint(arr) {
    var x = Math.round(Math.random() * (6 - 1) + 1);
       switch (x) {
        case 1 : console.log(arr[x-1]);
        break;
        case 2 : console.log(arr[x-1]);
        break;
        case 3 : console.log(arr[x-1]);
        break;
        case 4 : console.log(arr[x-1]);
        break;
        case 5 : console.log(arr[x-1]);
        break;
        case 6 : console.log(arr[x-1]);
        break;
    }
    return x;
}
var sprovedi = randomPrint(["Prvi autor; prvi citat", "Drugi autor; drugi citat", "Treci autor; prvi citat", 
"Cetvrti autor; prvi citat", "Peti autor; prvi citat", "Sesti autor; prvi citat", ]);
console.log(sprovedi);*/

/*2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
prestupna).*/

/*function year(year) {
    if ( year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        
        return "Ovo je prestupna godina!";
    
    } else {
        return "Ovo nije prestupna godina!";
    }
}
var sprovedi = year(1900);
console.log(sprovedi);*/

/*3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
samoglasnika i koliko suglasnika.*/

/*function check(string) {
    const samoglasnici = ["a", "e", "o", "i", "u"];
    var arr = string.toLowerCase().split('');
    var newArr = arr.filter(function (a) {return samoglasnici.includes(a);});
    return newArr.length;
}
var sprovedi = check("Beeeeograd");
console.log(sprovedi);*/

/*function check(string) {
    const samoglasnici = ["a", "e", "o", "i", "u"];
    var arr = string.toLowerCase().split('');
    
    var brojac = 0;
    for (i = 0; i < arr.length; i++) {
        if (samoglasnici.includes(arr[i])) {
        brojac++;
        }
    }
    return brojac;
}
var sprovedi = check("Beeeeograd");
console.log(sprovedi);*/

/*4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
podataka pojedinačnih elemenata ulaznog niza.*/

/*function type(arr) {
    //var newArr = arr.filter(function (a) {return typeof a;}); NE RADI
    var newArr = [];
    for ( i = 0; i < arr.length; i++) {
        newArr.push(typeof arr[i]);
        console.log(typeof arr[i]);
    }
    return "[" + newArr.join(", ") + "]";
}
var sprovedi = type([12, true, "srtr", -15]);
console.log(sprovedi);*/

/*5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
“pp”, “as23s”, “00sd”] => rezultat [“pp”].*/

/*function stringWithoutNumbers(arr) {
    var newArr = arr.filter(function (a) {return !/[0-9]/.test(a);});
   return "[" + newArr.join(", ") + "]";
}
var sprovedi = stringWithoutNumbers(["12bb", "pp", "as23s", "00sd"]);
console.log(sprovedi);*/

/*function stringWithoutNumbers(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (!/[0-9]/.test(arr[i]) ) {
        newArr.push(arr[i]);
    } 
    }
   return "[" + newArr.join(", ") + "]";
}
var sprovedi = stringWithoutNumbers(["12bb", "pp", "as23s", "00sd"]);
console.log(sprovedi);*/

/*6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
ili “not found” ako nema ponavljanja.
Primer 1: ""Computer""="" [8, ""C"", ""r"", ""pu"";, ""not found""] ,
Primer 2: ""Science"" ="" [7, ""S"", ""e"", ""e"", ""@ index 5""]*/

/*function reportString(string) {
    arr = [];
    arr[0] = string.length;
    arr[1] = string.slice(0, 1);
    arr[2] = string.slice(-1);
    if (string.length % 2 == 0) {
        arr[3] = string[string.length / 2 - 1] + string[string.length / 2];
    } else {
        arr[3] = string[Math.round(string.length / 2) - 1];
    }
    for (i = 0; i < string.length - 1; i++) {
        for (j = 1; j < string.length; j++) {
        if (string[1] == string[i]) {
            arr[4] = "@ Index " + i;
        }
        else {
            arr[4] = "not found";
        }
    }
    }
    return "[" + arr.join(", ") + "]";

}
var sprovedi = reportString("Science");
console.log(sprovedi);*/

/*7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
se ne ponavljaju.  
*/

/*function noRepeatElement(arr) {
    var newArr = [];
    for ( i = 0; i < arr.length; i++) {
        for ( j = 0; j < arr.length; j++) {
            if (i != j) {
                if (arr[i] === arr[j]) {
                    newArr.push(arr[i]);
                }
            }
        }
    }
    var elements = arr.filter(function (a) { return !newArr.includes(a);});
    return "[" + elements.join(", ") + "]";
}
var sprovedi = noRepeatElement([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]);
console.log(sprovedi);*/

/*8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
Primer 1: ([2, 3, 4, 5], N=2) => [[2, 3], [4, 5]]
Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]*/

/*function splitArray(arr, n) {
    var arr1 = arr.slice(0, n);
    var arr2 = arr.slice(n, arr.length);
    return "[" + "[" +  arr1.join(", ") + "]" + ", " + "[" + arr2.join(", ") + "]" + "]";
}
var sprovedi = splitArray([2, 3, 4, 5, 6], 3);
console.log(sprovedi);*/