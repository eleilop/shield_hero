/********************************************/
/*        Validation for index.html         */
/********************************************/

function validation() {
    const namePattern = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/;
    const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let conditions = document.getElementById('conditions');
    let isValid = true;

    /* FIRST NAME VALIDATION */
    if (firstName == '' || !namePattern.test(firstName)) {
        document.getElementById('firstNameHelp').style.visibility='visible';
        document.getElementById('firstName').style.borderColor='red';
        isValid = false;
    } else {
        document.getElementById('firstNameHelp').style.visibility='hidden';
        document.getElementById('firstName').style.borderColor='';
    }

    /* LAST NAME VALIDATION */
    if (lastName == '' || !namePattern.test(lastName)) {
        document.getElementById('lastNameHelp').style.visibility='visible';
        document.getElementById('lastName').style.borderColor='red';
        isValid = false;
    } else {
        document.getElementById('lastNameHelp').style.visibility='hidden';
        document.getElementById('lastName').style.borderColor='';
    }

    /* EMAIL VALIDATION */
    if (email == '' || !emailPattern.test(email)) {
        document.getElementById('emailHelp').style.visibility='visible';
        document.getElementById('email').style.borderColor='red';
        isValid = false;
    } else {
        document.getElementById('emailHelp').style.visibility='hidden';
        document.getElementById('email').style.borderColor='';
    }

    /* CONDITIONS VALIDATION */
    if (!conditions.checked) {
        document.getElementById('conditionsHelp').style.visibility='visible';
        document.getElementById('conditions').style.borderColor='red';
        isValid = false;
    } else {
        document.getElementById('conditionsHelp').style.visibility='hidden';
        document.getElementById('conditions').style.borderColor='';
    }

    return isValid;
}

function removeError(id) {
    document.getElementById(id+'Help').style.visibility='hidden';
    document.getElementById(id).style.borderColor='';
}