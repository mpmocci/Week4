//funzione che chiede all'utente il nome e lo memorizza nel local storage
//e stampa un messaggio di benvenuto

function welcome() {
    //se l'utente � gi� 'loggato'
    //stampa il messaggio
    let storedName = localStorage.getItem('name'); //in storedName andr� il valore oppure ...

    if (storedName != null)
        alert("Benvenuto " + storedName)
    //altrimenti chiede il nome, lo salva e stampa il messaggio
    else {
        let inseredName = prompt("Inserisci il tuo nome");

        localStorage.setItem('name', inseredName);

        alert("Benvenuto " + inseredName)
    }

}

//function welcome() {
//    //se l'utente � gi� 'loggato'
//    //stampa il messaggio
//    let storedName = sessionStorage.getItem('name'); //in storedName andr� il valore oppure ...

//    if (storedName != null)
//        alert("Benvenuto " + storedName)
//    //altrimenti chiede il nome, lo salva e stampa il messaggio
//    else {
//        let inseredName = prompt("Inserisci il tuo nome");

//        sessionStorage.setItem('name', inseredName);

//        alert("Benvenuto " + inseredName)
//    }

//}