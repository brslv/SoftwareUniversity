function get(type, name) {
    return type === 'id'
           ? document.getElementById(name)
           : document.getElementsByClassName(name);
}

var more = get('class', 'more')[0],
	chBox = get('id', 'invoice-check');

chBox.addEventListener('click', function(){
	if(chBox.checked) {
		more.style.display = 'block';
	} else {
		more.style.display = 'none';
	}
});