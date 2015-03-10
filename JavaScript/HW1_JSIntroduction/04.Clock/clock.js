var clockSection = document.getElementById('clock-section');

var clock = function() {
    var d = new Date();
    clockSection.innerHTML = d.toLocaleTimeString();
}

clockSection.innerHTML = 'Wait a sec...';

setInterval(function(){clock()},1000);