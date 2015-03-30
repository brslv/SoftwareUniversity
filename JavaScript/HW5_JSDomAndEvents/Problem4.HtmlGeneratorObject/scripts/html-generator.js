var get = function(id) {
    return document.getElementById(id);
}

var create = function(el) {
    return document.createElement(el);
}

var btnNewLink      = get('add-a'),
    btnNewParagraph = get('add-p'),
    btnNewDiv       = get('add-div');


var htmlGen = {

    createParagraph : function(id, text) {
        var parent = get(id),
            p = create('p');

        p.innerHTML = text;
        parent.appendChild(p);
    },

    createDiv : function(id, classTitle) {
        var parent = get(id),
            div = create('div');

        div.className = classTitle;
        div.innerHTML = 'You\'ve just added a new div and made me happy!';
        parent.appendChild(div);
    },

    createLink : function(id, text, url) {
        var parent = get(id),
            a = create('a'),
            br = create('br');

        a.setAttribute('href', url);
        a.setAttribute('target', 'blank');
        a.text = text;
        parent.appendChild(a);
        parent.appendChild(br);
    }

};

btnNewDiv.addEventListener('click', function(){
    htmlGen.createDiv('pls', 'new-random-class');
});

btnNewLink.addEventListener('click', function(){
    htmlGen.createLink('pls', 'You\'ve just added a new link and made me happy!', 'http://9gag.com');
});

btnNewParagraph.addEventListener('click', function(){
    htmlGen.createParagraph('pls', 'You\'ve just added a new paragraph and made me happy!')
});