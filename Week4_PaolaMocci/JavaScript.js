function save() {
    let username = document.getElementById("username").value;
    localStorage.setItem('username', username);
}

let loggedIn = false;

function checkLoggedUser() {
    let username = localStorage.getItem("username");

    if (username != null) {
        loggedIn = true;

        let button = document.getElementById("submit_btn");
        button.disabled = loggedIn;
        button.style.opacity = 0.3;

        let form = document.getElementById("myForm");
        form.style.display = "none";
        let subscribe = document.getElementById("subscribe");
        subscribe.style.display = "none";
        //let logoutButton = document.getElementById("unsubscribe");
        //unsubscribe.style.display = "inline-block";
        let logoutButton = document.getElementById("logout_btn");
        logoutButton.style.display = "inline-block";

    }
    else {
        loggedIn = false;

        let button = document.getElementById("submit_btn");
        button.disabled = loggedIn;


        let logoutButton = document.getElementById("logout_btn");
        logoutButton.style.display = "none";

    }
}

function btnDisabled() {
    document.getElementById("submit_btn").disabled = true;


}

function disableBtn() {

    let username = document.getElementById("username");
    let submit_btn = document.getElementById("submit_btn");

    if (username == null) {

        submit_btn.disabled = true;
        return;

    }
    else {
        submit_btn.disabled = false;

    }

}

function deleteData() {

    localStorage.removeItem("username");
    location.reload();

}

function welcome() {

    let username = localStorage.getItem("username");

    if (username != null) {
        alert("Benvenuto " + username +"!");
    }

}

function openHome() {
    window.open("http://localhost:51554/Home.html", "_blank");

}