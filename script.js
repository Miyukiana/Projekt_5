function getNumber() {
    let inputElement = document.getElementById("numberInput");
    let number = parseInt(inputElement.value); // Wert als Integer holen

    if (!isNaN(number)) {
        const myAge = 14;
        let difference = number - myAge;
        let message = "";

        if (difference > 0) {
            message = "You are " + difference + " years older than me.";
        } else if (difference < 0) {
            message = "I am " + Math.abs(difference) + " years older than you.";
        } else {
            message = "We are the same age!";
        }

        document.getElementById("output").innerText = message;
    } else {
        document.getElementById("output").innerText = "Bitte eine gültige Zahl eingeben.";
    }
}
function getColor() {
    let inputElement = document.getElementById("colorInput");
    let color = inputElement.value.trim().toLowerCase(); // Remove spaces & convert to lowercase

    if (color === "") {
        document.getElementById("output2").innerText = "Please enter a color.";
        return;
    }

    // Check if the entered color is a valid CSS color
    if (CSS.supports("color", color)) {
        document.getElementById("output2").innerText = color +" is a beautiful color!";
    } else {
        document.getElementById("output2").innerText = "This is not a real color!";
    }
}
function getAnimal(){
    let inputElement = document.getElementById("animalInput");
    let animal = inputElement.value.trim().toLowerCase();
    if (animal === ""){
        document.getElementById("output3").innerText = "Please enter an animal.";
        return;
    }
    if (animal === "dog"|| "cat"|| "fish"|| "bird"|| "rabbit"|| "horse"|| "butterfly"|| "shark"|| "giraffe"|| "elephant"|| "bee"||
"lion"|| "tiger"|| "bear"|| "monkey"|| "panda"|| "penguin"|| "kangaroo"|| "koala"|| "crocodile"|| "snake"||
"turtle"|| "owl"|| "fox"|| "wolf"|| "deer"|| "zebra"|| "rhinoceros"|| "hippopotamus"|| "camel"|| "flamingo"||
"parrot"|| "dolphin"|| "octopus"|| "jellyfish"|| "starfish"|| "seahorse"|| "crab"|| "lobster"|| "snail"||
"ant"|| "spider"|| "scorpion"|| "mosquito"|| "fly"|| "ladybug"|| "beetle"|| "dragonfly" ) 
{ document.getElementById("output3").innerText = animal + " is a beautiful animal!";
        else {
document.getElementById("output3").innerText = "This animal doesn't exist.";
}}
