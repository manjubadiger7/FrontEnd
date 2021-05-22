var Name = document.getElementById('name');
function validate() {
    var regExp = /[a-zA-z]/;

    if (regExp.test(Name.value)) {
        document.getElementById('error').innerHTML = "Valid";
        document.getElementById('error').style.color = "green";
        document.getElementById('error').style.visibility = "visible";
        return false;

    } else {
        document.getElementById('error').innerHTML = "InValid";
        document.getElementById('error').style.color = "red";
        document.getElementById('error').style.visibility = "visible";
        return false;
    }
}
