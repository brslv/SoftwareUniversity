var get = function (id) {
    return document.getElementById(id);
};

var checkValidity = function() {
    var pattern = /^(\S+)@([a-zA-Z0-9_]+)(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?/gi,
        email = input.value.trim();

    if(email !== '') {
        if(pattern.exec(email)) {
            validityField.classList.add("valid");
            validityField.classList.remove("invalid");
        }
        else {
            validityField.classList.add("invalid");
            validityField.classList.remove("valid");
        }

        validityField.innerHTML = email;
    }
};

var input = get('input'),
    validityField = get('validity-field'),
    btn = get('submit');

btn.addEventListener('click', checkValidity);
input.addEventListener('keyup', function(evt){
    if(evt.keyCode === 13) {
        checkValidity();
        input.value = '';
    }
});

input.focus();

// If valid -> set the .valid class to the second field
// if not   -> set the .invalid class to the second field
// copy the value from the first field and paste it in the second
// refocus on the first field
// Add event listener to the button -> when clicked
