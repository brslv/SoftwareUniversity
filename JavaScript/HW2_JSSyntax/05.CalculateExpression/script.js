(function(){
    
    var inField, 
    outField, 
    btn;

    var getEl = function(id) {
        return document.getElementById(id);
    };

    function calculate() {
        var exp = inField.value,
            result = eval(exp);

        if (exp) outField.value = result;

        inField.focus();
        inField.value = '';
    }

    inField = getEl('inField');
    outField = getEl('outField');
    btn = getEl('btn');

    btn.addEventListener('click', calculate);

    inField.addEventListener('keyup', function(e){
        if(e.keyCode === 13){
            calculate();
        }
    });
    
    inField.focus();
    
}())