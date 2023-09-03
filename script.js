var button = document.querySelector(".button1");



var myArray = ["What is your favorite food?", "Who is your favorite comedian?", "What is your favorite color?"]

button.addEventListener("click", function() {
    var number = Math.floor(Math.random() * 3);
    question = prompt(myArray[number]);

    if (myArray[number] === "What is your favorite food?"
     ) {
        question = question.toLowerCase()
        alert("Your favorite food is " + question + "!")
    } if (myArray[number] === "Who is your favorite comedian?") {
        function capitalizeWord(question) {
            const words = question.split(' ');
            const capitalizedWords = words.map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            });

            const capitalizedString = capitalizedWords.join(' ');
            return capitalizedString;
        }
        question = capitalizeWord(question);
        alert("Your favorite comedian is " + question)
    } if (myArray[number] === "What is your favorite color?") {
        question = question.charAt(0).toUpperCase() + question.slice(1).toLowerCase();
        alert(question + " is your favorite color!");
    }
});

var button2 = document.getElementById("button2");

const myArray2 = ["You seem to be suffering from delusions of adequacy.", "You are the human equivalent of a participation trophy.", "You have a face for radio."]

var insult = document.getElementById("insult");

button2.addEventListener("click", function() {
    var number2 = Math.floor(Math.random() * 3);
    insult.textContent = myArray2[number2]
})