//Javascript

/*Su 
 * pi� 
 linee*/

//in C#
//int n = 2;
//Book b = new...

let n = 1;
n = "uno";

let isValid = true;

function miaFunzione() {
    console.log("Prima di essere dichiarata" + k);
    var k = 2;
    console.log("Dopo la dichiarazione" + k);

    /*console.log("Prima di essere dichiarata" + m);*/
    let m = 3;
    console.log("Dopo la dichiarazione" + m);
}

function demoOnClick() {
    alert("Hai cliccato il tasto!")
}

function demoOnLoad() {
    alert("Benvenuto nel sito")
}

function demoOnKeyDown() {
    alert("Hai cliccato un tasto sulla tastiera");
}

function demoOnChange() {
    let element = document.getElementById("role");
    let chosenRole = element.value;

    alert("Hai scelto " + chosenRole);
}

function checkSelection() {
    let elements = document.getElementsByClassName("checkBox");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) /*se l'elemento � checkato => true*/
            alert("Hai selezionato qualcosa");
    }
}
