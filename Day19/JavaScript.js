
//apro pagina dei Dettagli da Prodotti
function openDetails() {
    window.open("http://localhost:52562/Dettagli.html", "_blank");

}

//salva i dati di login
function save(){
    let username= document.getElementById("email").value;
    let password = document.getElementById("password").value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

let loggedIn = false;

//controlla se lo user è già loggato, fa scomparire form e comparire logout se loggato
function checkLoggedUser() {
    //recupero dal local storage username e password
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    //se l'utente è loggato:
    if (username != null && password != null) {
        loggedIn = true;

        //rendo il button che fa il  login disabilitato
        let button = document.getElementById("submit_btn");
        button.disabled = loggedIn;
        button.style.opacity = 0.3;

        //nascondo il form
        let form = document.getElementById("myForm");
        form.style.display = "none";
        //mostro logout
        let logoutButton = document.getElementById("logout_btn");
        logoutButton.style.display = "inline-block"

    }
    else {
        loggedIn = false;

        //rendo il button che apre la login abilitato
        let button = document.getElementById("submit_btn");
        button.disabled = loggedIn;


        //recupero il button di logout e lo nascondo
        let logoutButton = document.getElementById("logout_btn");
        logoutButton.style.display = "none";

    }
}

//disattiva inizialmente il bottone login
function btnDisabled() {
    document.getElementById("submit_btn").disabled = true;


}

//verifico che l'utente abbia compilato i tasti login, nel caso abilito il tasto login 
function disableBtn() {

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let submit_btn= document.getElementById("submit_btn");

    //verifico che siano compilati
    if (email == null || password == null) {

        submit_btn.disabled = true;
        return;

    }
    else {
        submit_btn.disabled = false;

    }

}

//elimina dati dallo storage se logout
function deleteData() {

    localStorage.removeItem("username");
    localStorage.removeItem("password");

}