// verificare che l'utente ha inserito qualcosa
//se entrambi gli input sono compilati abilito il tasto login
//verificare che l'utente ha inserito qualcosa
//se entrambi gli input sono compilati => abilito il tasto login 
function changeLoginPage() {
    //recupero gli elementi il cui class name è input
    let inputs = document.getElementsByClassName("input");

    //recuper il tasto login
    let loginButton = document.querySelector("input[type='submit']")

    //verifico che siano compilati
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") //se l'i-esimo input è stringa vuota
        {
            //tasto login resta disabilitato
            loginButton.disabled = true; //oppure disabled = "disabled"
            return;
        }
        loginButton.disabled = false;
    }
}

//al submit, salvo i dati inseriti dall'utente
function save() {
    //recupero tutti gli elementi che hanno class name input -> inputs = array di 2 elementi
    //0: elemento username
    //1: elemento password
    let inputs = document.getElementsByClassName("input");

    let insUsername = inputs[0].value;
    let insPassword = inputs[1].value;

    //salvo nel local storage
    localStorage.setItem('username', insUsername);
    localStorage.setItem('password', insPassword);
}

//al submit, la form scompare e compare il logout button
function hideForm() {
    ////recupero la form
    let form = document.querySelector("form");

    ////nascondo la form
    form.style.display = "none"; //cambio stile della form con display:none;

    //recupero tasto di logout
    let logoutButton = document.getElementById("logoutButton");

    //lo rendo visibile
    logoutButton.style.display = "inline";
}

//Al caricamento della pagina, bisogna verificare se l'utente è loggato o meno (ovvero se ci sono dati nel local storage).
//Se lo è, l'utente vede solo il tasto logout. Se non lo è, ricompare la form e il tasto login disabilitato.
function checkLoggedUser() {
    //recupero eventuali dati dal local storage
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');

    //se ci sono (ovvero l'utente è loggato) nascondo la form
    if (storedUsername != null && storedPassword != null) {
        hideForm();
    }

    //altrimenti niente
}


//Se l'utente clicca logout, la form con il tasto di login disabilitato ricompaiono,
//il tasto logout è nascosto e il localstorage viene svuotato.
function logout() {
    localStorage.clear() //svuoto il local storage

    //recupero la form
    let form = document.querySelector("form");

    //mostro la form
    form.style.display = ""; //"inline", "block", "inline-block" ...

    //recupero e nascondo il tasto di logout 
    let logoutButton = document.getElementById("logoutButton");
    logoutButton.style.display = "none";
}