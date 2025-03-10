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