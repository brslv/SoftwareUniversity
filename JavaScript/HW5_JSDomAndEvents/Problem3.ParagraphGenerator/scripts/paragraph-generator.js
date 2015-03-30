// Take the element to which we append
// Create new element
// innerHTML the text to it
// parent.appendChild(newEl);

var get = function(id) {
    return document.getElementById(id);
}

var create = function(type) {
    return document.createElement(type);
}

var addNewParagraph = function(after, text) {
    var parent = get(after),
        newEl = create('p');

    newEl.innerHTML = text;
    parent.appendChild(newEl);
}

var btn = get('click-me-btn');

btn.addEventListener('click', function(){ addNewParagraph('after-me', 'Thank you man, u so nice!' ) });