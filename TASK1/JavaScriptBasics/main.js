console.log("Starting javascript...");

var myName = "Nahuel";
var age = 39;
var ignasiAge = 32;
var ageDiff = age - ignasiAge;
var comingOfAge = "";
var ageDiffWithIgnasi = "";

if (age >= 21) {
  comingOfAge = "I´m older than 21";
} else {
  comingOfAge = "I´m not older than 21";
}

if (ageDiff == 0) {
  ageDiffWithIgnasi = "I´m have the same age as Ignasi";
} else if (ageDiff < 0) {
  ageDiffWithIgnasi = "Ignasi is older than me";
} else {
  ageDiffWithIgnasi = "Ignasi is younger than me";
}

document.getElementById("demo").innerHTML = "<h1>JavaScript Basics</h1><h2>Writing expressions with variables</h2>" + "<h3>Exercise 1:</h3>" + "My Name is: " + myName + "." + "<br><br><h3>Exercise 2:</h3>" + "I have: " + age + " years old." + "<br><br><h3>Exercise 3:</h3>" + "Ignasi is " + ignasiAge + " years old." + "<br>The age difference that I have with Ignasi is: " + ageDiff + " years." + "<br><h2>Writing code with conditionals</h2>" + "<h3>Exercise 4:</h3>" + comingOfAge + "." + "<br><br><h3>Exercise 5:</h3>" + ageDiffWithIgnasi + ".";
