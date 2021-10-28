var loggedIn = false;

function checkLoggedUser() {

    //recupero dal local storage username e password
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    //se l'utente è loggato:
    if (username != null && password != null) {
        loggedIn = true;

        //rendo il button che apre la login invisibile
        let button = document.getElementById("accedi");
        button.disabled = loggedIn;
        button.style.opacity = 0.3;
    }
    else {
        loggedIn = false;

        //rendo il button che apre la login invisibile
        let button = document.getElementById("accedi");
        button.disabled = loggedIn;

    }

}



function welcome() {

    //se l'utente è loggato:
    if (loggedIn) {
        let username = localStorage.getItem("username");
        alert("Benvenuto " + username);
    }
    else {
        alert("Benvenuto!")
    }
}

function openForm() {

    let myw = window.open("Login.html", 'popup', 'width=300,height=300');

}

function closeForm() {
    self.close();
}


function save() {
    let inputs = document.getElementsByClassName("input");

    let insUsername = inputs[0].value;
    let insPassword = inputs[1].value;

    localStorage.setItem('username', insUsername);
    localStorage.setItem('password', insPassword);
    closeForm();
    load();
}

