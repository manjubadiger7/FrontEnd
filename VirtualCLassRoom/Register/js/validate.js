$(function () {

    $("#name_error_message").hide();
    $("#age_error_message").hide()
    $("#email_error_message").hide()
    $("#city_error_message").hide()
    $("#state_error_message").hide()
    $("#country_error_message").hide()
    $("#zipcode_error_message").hide()
    $("#User_name_error_message").hide()
    $("#password_error_message").hide()
    $("#confirm_password_error_message").hide();
    $("#access_error_message").hide();
    $("#drop_down").hide();

    $("#fullName").focusout(function () {
        check_name();
    });
    $("#age").focusout(function () {
        check_age();
    });
    $("#email").focusout(function () {
        check_email();
    });

    $("#city").focusout(function () {
        check_city();
    });
    $("#state").focusout(function () {
        check_state();
    });
    $("#country").focusout(function () {
        check_country();
    });
    $("#zipcode").focusout(function () {
        check_zipcode();
    });
    $("#userName").focusout(function () {
        check_username();
    });


    $("#password").focusin(function () {
        $("#drop_down").slideDown(500);
    });
    $("#password").focusout(function () {
        check_password();
    });
    $("#password").focusout(function () {
        $("#drop_down").slideUp();
    });


    $("#confirmPassword").focusout(function () {
        check_confirm_password();
    })
    $("#access").focusout(function () {
        check_access();
    })




    function check_name() {
        var pattern = /^[a-zA-Z]*$/;
        var name = $("#fullName").val();
        if (pattern.test(name) && name !== '') {
            $("#name_error_message").html("Valid Name");
            $("#name_error_message").show();
            $("#name_error_message").css("color", "green",);
            error_name = true;
        }
        else {
            $("#name_error_message").html("Should contain only characters");
            $("#name_error_message").show();
            $("#name_error_message").css("color", "red",);
        }
    }

    function check_age() {
        var name = $("#age").val();
        if (name > 18 && name < 60 && name !== '') {
            $("#age_error_message").html("Valid age");
            $("#age_error_message").show();
            $("#age_error_message").css("color", "green",);
            error_name = true;
        }
        else {
            $("#age_error_message").html("Should be between 18-60");
            $("#age_error_message").show();
            $("#age_error_message").css("color", "red",);
        }
    }

    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var user_name = $("#email").val();
        if (pattern.test(user_name) && user_name !== '') {
            $("#email_error_message").html("Valid email");
            $("#email_error_message").show();
            $("#email_error_message").css("color", "green",);
            error_userName = true;
        }
        else {
            $("#email_error_message").html("Invalid email !");
            $("#email_error_message").show();
            $("#email_error_message").css("color", "red",);
        }
    }

    function check_city() {
        var pattern = /^[a-zA-Z]*$/;
        var name = $("#city").val();
        if (pattern.test(name) && name !== '') {
            $("#city_error_message").html("Valid City");
            $("#city_error_message").show();
            $("#city_error_message").css("color", "green",);
            error_name = true;
        }
        else {
            $("#city_error_message").html("Should contain only characters");
            $("#city_error_message").show();
            $("#city_error_message").css("color", "red",);
        }
    }

    function check_state() {
        var pattern = /^[a-zA-Z]*$/;
        var name = $("#state").val();
        if (pattern.test(name) && name !== '') {
            $("#state_error_message").html("Valid City");
            $("#state_error_message").show();
            $("#state_error_message").css("color", "green",);
            error_name = true;
        }
        else {
            $("#state_error_message").html("Should contain only characters");
            $("#state_error_message").show();
            $("#state_error_message").css("color", "red",);
        }
    }

    function check_country() {
        var pattern = /^[a-zA-Z]*$/;
        var name = $("#country").val();
        if (pattern.test(name) && name !== '') {
            $("#country_error_message").html("Valid Country");
            $("#country_error_message").show();
            $("#country_error_message").css("color", "green",);
            error_name = true;
        }
        else {
            $("#country_error_message").html("Should contain only characters");
            $("#country_error_message").show();
            $("#country_error_message").css("color", "red",);
        }
    }

    function check_zipcode() {
        var pattern = /^([0-9]{3}-[0-9]{3})*$/; //"\\d{5}(-\\d{4})?"
        var name = $("#zipcode").val();
        if (pattern.test(name) && name !== '') {
            $("#zipcode_error_message").html("Valid Zip code");
            $("#zipcode_error_message").show();
            $("#zipcode_error_message").css("color", "green",);
            error_name = true;
        }
        else {
            $("#zipcode_error_message").html("Should contain only numbers and format xxx-xxx");
            $("#zipcode_error_message").show();
            $("#zipcode_error_message").css("color", "red",);
        }
    }

    function check_username() {
        var pattern = /^([a-zA-Z])*$/;
        var name = $("#userName").val();
        if (pattern.test(name) && name !== '') {
            $("#User_name_error_message").html("Valid user name");
            $("#User_name_error_message").show();
            $("#User_name_error_message").css("color", "green",);
            error_name = true;
        }
        else {
            $("#User_name_error_message").html("Should contain only characters");
            $("#User_name_error_message").show();
            $("#User_name_error_message").css("color", "red",);
        }
    }


    function check_password() {
        var pattern = /^(?=.*\d)(?=.*[a-z]{2,})(?=.*[A-Z]{2,})[a-zA-Z0-9]{9,}$/;
        var password = $("#password").val();
        if (pattern.test(password) && password !== '') {

            $("#password_error_message").html("Valid Password");
            $("#password_error_message").show();
            $("#password_error_message").css("color", "green",);
            error_password = true;
        }
        else {
            $("#password_error_message").html("Invalid  !");
            $("#password_error_message").show();
            $("#password_error_message").css("color", "red",);
        }
    }

    function check_confirm_password() {
        var confirm_password = $("#confirmPassword").val();
        var password = $("#password").val();
        if (confirm_password == password && confirm_password !== '') {

            $("#confirm_password_error_message").html("Password confirmed");
            $("#confirm_password_error_message").show();
            $("#confirm_password_error_message").css("color", "green",);
            error_confirmPassword = true;

        }
        else {
            $("#confirm_password_error_message").html("Password does not match!");
            $("#confirm_password_error_message").show();
            $("#confirm_password_error_message").css("color", "red",);
        }
    }




    function check_access() {
        var profession = $("#form_profession").val();
        if (profession !== '') {

            $("#access_error_message").html("");
            $("#access_error_message").show();
            $("#access_error_message").css("color", "green",);
            error_proffession = true;
        }
        else {
            $("#access_error_message").html("Please select frofession");
            $("#access_error_message").show();
            $("#access_error_message").css("color", "red",);
        }
    }


});