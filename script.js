const pwd = document.querySelector("#password");
const confirmpwd = document.querySelector("#confirm-password");
const error = document.querySelector("#error");
const submit = document.querySelector("#submit-button");

confirmpwd.addEventListener("input", () => {
    if (pwd.value !== confirmpwd.value){
        error.innerHTML = "Passwords do not match"
    } else{
        error.innerHTML = ""
    }
});

submit.addEventListener("click", function(e) {
    if (pwd.value !== confirmpwd.value){
        e.preventDefault();
    }
});