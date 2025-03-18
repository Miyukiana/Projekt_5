const translations = {
    "de": {
        "title": "KeineAhnung",
        "questions": "Fragen:",
        "age_question": "Wie alt bist du?",
        "age_placeholder": "Dein Alter",
        "color_question": "Was ist deine Lieblingsfarbe?",
        "color_placeholder": "Deine Lieblingsfarbe",
        "animal_question": "Was ist dein Lieblingstier?",
        "animal_placeholder": "Dein Lieblingstier",
        "submit": "Absenden",
        "age_older": "Du bist {0} Jahre älter als ich.",
        "age_younger": "Ich bin {0} Jahre älter als du.",
        "age_same": "Wir sind gleich alt!",
        "age_invalid": "Bitte gib eine gültige Zahl ein.",
        "color_prompt": "Bitte gib eine Farbe ein.",
        "color_valid": "{0} ist eine schöne Farbe!",
        "color_invalid": "Das ist keine echte Farbe!",
        "animal_prompt": "Bitte gib ein Tier ein.",
        "animal_valid": "{0} ist ein tolles Tier!",
        "animal_invalid": "Dieses Tier existiert nicht in unserer Liste."
    },
    "en": {
        "title": "NoIdea",
        "questions": "Questions:",
        "age_question": "How old are you?",
        "age_placeholder": "Your Age",
        "color_question": "What's your favorite color?",
        "color_placeholder": "Your favorite color",
        "animal_question": "What's your favorite animal?",
        "animal_placeholder": "Your favorite animal",
        "submit": "Submit",
        "age_older": "You are {0} years older than me.",
        "age_younger": "I am {0} years older than you.",
        "age_same": "We are the same age!",
        "age_invalid": "Please enter a valid number.",
        "color_prompt": "Please enter a color.",
        "color_valid": "{0} is a beautiful color!",
        "color_invalid": "This is not a real color!",
        "animal_prompt": "Please enter an animal.",
        "animal_valid": "{0} is a great animal!",
        "animal_invalid": "This animal doesn't exist in our list."
    }
};

// Farb-Übersetzungen von Englisch nach Deutsch
const colorTranslations = {
    "red": "rot", "green": "grün", "blue": "blau", "yellow": "gelb",
    "black": "schwarz", "white": "weiß", "gray": "grau", "purple": "lila",
    "pink": "rosa", "brown": "braun", "orange": "orange", "turquoise": "türkis",
    "gold": "gold", "silver": "silber"
};

const animalTranslations = {
    "dog": "Hund", "cat": "Katze", "fish": "Fisch", "bird": "Vogel", "rabbit": "Kaninchen",
    "horse": "Pferd", "butterfly": "Schmetterling", "shark": "Hai", "giraffe": "Giraffe",
    "elephant": "Elefant", "bee": "Biene", "lion": "Löwe", "tiger": "Tiger", "bear": "Bär",
    "monkey": "Affe", "panda": "Panda", "penguin": "Pinguin", "kangaroo": "Känguru",
    "koala": "Koala", "crocodile": "Krokodil", "snake": "Schlange", "turtle": "Schildkröte",
    "owl": "Eule", "fox": "Fuchs", "wolf": "Wolf", "deer": "Hirsch", "zebra": "Zebra"
};

// Funktion: Ersten Buchstaben groß machen
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Sprache setzen und Texte aktualisieren
function setLanguage(lang) {
    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// Seite mit gespeicherter Sprache laden
document.addEventListener("DOMContentLoaded", () => {
    const userLang = localStorage.getItem("language") || "de";
    setLanguage(userLang);
});

// Funktion zur Altersprüfung
function getNumber() {
    const inputElement = document.getElementById("numberInput");
    const number = parseInt(inputElement.value);
    const lang = localStorage.getItem("language") || "de";

    if (!isNaN(number)) {
        const myAge = 14;
        const difference = number - myAge;
        let message = "";

        if (difference > 0) {
            message = translations[lang]["age_older"].replace("{0}", difference);
        } else if (difference < 0) {
            message = translations[lang]["age_younger"].replace("{0}", Math.abs(difference));
        } else {
            message = translations[lang]["age_same"];
        }

        document.getElementById("output").innerText = message;
    } else {
        document.getElementById("output").innerText = translations[lang]["age_invalid"];
    }
}

// Funktion zur Farbprüfung
function getColor() {
    const inputElement = document.getElementById("colorInput");
    let color = inputElement.value.trim().toLowerCase();
    const lang = localStorage.getItem("language") || "de";

    if (color === "") {
        document.getElementById("output2").innerText = translations[lang]["color_prompt"];
        return;
    }

    // Prüfe, ob es eine deutsche Farbe ist und hole die englische Entsprechung
    const translatedColor = Object.keys(colorTranslations).find(key => colorTranslations[key] === color);

    // Falls die Farbe existiert, prüfe, ob sie von CSS unterstützt wird
    if (CSS.supports("color", color) || (translatedColor && CSS.supports("color", translatedColor))) {
        const formattedColor = capitalizeFirstLetter(color);
        document.getElementById("output2").innerText = translations[lang]["color_valid"].replace("{0}", formattedColor);
    } else {
        document.getElementById("output2").innerText = translations[lang]["color_invalid"];
    }
}

function getAnimal() {
    const inputElement = document.getElementById("animalInput");
    let animal = inputElement.value.trim().toLowerCase();
    const lang = localStorage.getItem("language") || "de";

    if (animal === "") {
        document.getElementById("output3").innerText = translations[lang]["animal_prompt"];
        return;
    }

    // Prüfe, ob das Tier auf Englisch eingegeben wurde → Übersetze es ins Deutsche
    if (animalTranslations[animal]) {
        animal = animalTranslations[animal];
    }

    // Prüfe auch, ob das Tier bereits direkt auf Deutsch eingegeben wurde
    const validAnimals = Object.values(animalTranslations); // Alle deutschen Tiernamen

    if (validAnimals.includes(animal) || Object.keys(animalTranslations).includes(animal)) {
        // Falls das Tier auf Deutsch oder Englisch eingegeben wurde, ist es gültig
        document.getElementById("output3").innerText = translations[lang]["animal_valid"].replace("{0}", capitalizeFirstLetter(animal));
    } else {
        document.getElementById("output3").innerText = translations[lang]["animal_invalid"];
    }
}