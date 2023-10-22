function reverseString() {
    var inputElement = document.getElementById("inputString");
    var outputElement = document.getElementById("output");

    var userInput = inputElement.value;
    var reversedString = userInput.split("").reverse().join("");

    outputElement.innerText = "Reversed string: " + reversedString;
}