console.log("Exercise 1:");

console.log("Write a JavaScript function that reverses a number.");

function invertNumbers(y) {

    var invested = [];

    var toArray = [];

    for (var i = 0; i < y.length; i++) {
        toArray.push(y[i]);
    }

    for (var i = toArray.length - 1; i > -1; i--) {

        invested.push(toArray[i]);
    }

    return invested.join("");
}

var x = "32443";

console.log(invertNumbers(x));

console.log("");




console.log("Exercise 2:");

console.log("Write a JavaScript function that returns a string in alphabetical order.");

function alphabeticalOrder(anyString) {

    var sortedString = [];

    for (var i = 0; i < anyString.length; i++) {

        sortedString.push(anyString[i]);
    }

    sortedString.sort();

    return sortedString.toString();
}

var myString = "ffhrhfuhaeoioqiwbbserpoydtsgzbnyu";

console.log(alphabeticalOrder(myString));

console.log("");




console.log("Exercise 3:");

console.log("Write a JavaScript function that converts the first letter of every word to uppercase.");

function convertToUppercase(paragraph) {
    const re = /(^|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(?:([a-záéíóúüñ])|([A-ZÁÉÍÓÚÜÑ]))|([A-ZÁÉÍÓÚÜÑ]+)/gu;
    return paragraph.replace(re,
        (m, previousChar, initialLowerCase, initialUpperCase, intermediateUppercase) => {
            const locale = ['es', 'gl', 'ca', 'pt', 'en'];
            if (intermediateUppercase)
                return intermediateUppercase.toLocaleLowerCase(locale);
            return previousChar
                 + (initialLowerCase ? initialLowerCase.toLocaleUpperCase(locale) : initialUpperCase);
        }
    );
}

var x = "prince of persia";

console.log(convertToUppercase(x));

console.log("");




console.log("Exercise 4:");

console.log("Write a JavaScript function that finds the longest word in a phrase.");

function findLongestWord(paragraph) {

    var paragraphToArray = paragraph.replace(",", " ").split(" ");

    longestWord = "";

    paragraphToArray.forEach(function (word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        };
    });
    return longestWord;
}

x = "Web Development Tutorial";

console.log(findLongestWord(x));
