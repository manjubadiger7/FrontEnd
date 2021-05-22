
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validate() {

    var name = document.form.Name.value;

    var nameErr = true;

    if (name == "") {
        printError("nameErr", "Please enter your name");
    }
    else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    return false;

}

















































// Name.addEventListener('input', validate);

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     alert('SUBMITTED');
//     return true;
// });

// function validate() {
//     var Name = document.getElementsByName('Name').value;
//     const regExp = /[a-zA-Z]/;
//     console.log(Name);



    // if (regExp.test(Name.value)) {

    //     document.getElementById('nameError').innerHTML = "Valid Name";
    //     document.getElementById('nameError').style.visibility = "visible";
    //     document.getElementById('nameError').style.color = "green";



    //     return false;
    // }
    // else {
    //     document.getElementById('nameError').innerHTML = "Invalid Name";
    //     document.getElementById('nameError').style.visibility = "visible";
    //     document.getElementById('nameError').style.color = "red";
    //     return false;

    // }
//}



// function validateName() {
//     var regExp = /[a-zA-Z]/;
//     if (Name.value == "") {
//         document.getElementById('nameError').innerHTML = "Name can not be Empty";
//         document.getElementById('nameError').style.visibility = "visible";
//         document.getElementById('nameError').style.color = "red";
//     }
//     if (regExp.test(Name.value)) {
//         document.getElementById('nameError').innerHTML = "Valid Name";
//         document.getElementById('nameError').style.visibility = "visible";
//         document.getElementById('nameError').style.color = "green";
//         return false;
//     }
//     else {
//         document.getElementById('nameError').innerHTML = "Invalid Name";
//         document.getElementById('nameError').style.visibility = "visible";
//         document.getElementById('nameError').style.color = "red";
//         return false;
//     }
// }

// function userNameValidate() {
//     var usernameExpression = /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/;
//     if (usernameExpression.test(UserNmae)) {
//         document.getElementById('userNameError').innerHTML = "Valid Name";
//         document.getElementById('userNameError').style.visibility = "visible";
//         document.getElementById('userNameError').style.color = "green";
//         return false;
//     } else {
//         document.getElementById('userNameError').innerHTML = "Invalid Name";
//         document.getElementById('userNameError').style.visibility = "visible";
//         document.getElementById('userNameError').style.color = "red";
//         return false;
//     }
// }

// function Validate() {


//     return validateName(); 
//     return userNameValidate();

// }