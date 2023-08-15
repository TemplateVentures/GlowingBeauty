function LoginForm() {
    let form = document.getElementById("show-login");
    let login = document.getElementById("form");
    let body = document.body;

    login.classList.add("show-login-form");
    form.classList.add("show-form");
    body.classList.add("disable-scroll");
    console.log('click');


}

function closeForm(){
    let closeBtn = document.getElementById("show-login");
    let cloeForm  = document.getElementById("form");
    let body = document.body;
    closeBtn.classList.remove("show-form");
    cloeForm.classList.remove("show-login-form");
    body.classList.remove("disable-scroll");
}

function showNavlink(){
    let navlink = document.getElementById('navlink');
    navlink.classList.toggle('show-navlink-cont');
}