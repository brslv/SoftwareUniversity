function solve(input) {
	var pattern = /(<p>)(.+?)(<\/p>)/g,
	extract = pattern.exec(input[0]),
	extracts = [],
	despaced = [];

	while(extract) {
		extracts.push(extract[2]);
		extract = pattern.exec(input[0]);
	}

	extracts.forEach(function(x){
		var despacedEl = x.replace(/[^a-z0-9]+/gm, ' ');
		despaced.push(despacedEl);
	});

	var result = '';

	for(var i = 0; i < despaced.length; i++) {
		for(var j = 0; j < despaced[i].length; j++) {
			result += decript(despaced[i][j]);
		}
	}

	console.log(result.replace(/[A-Z\W]+/gm, ' '));
	function decript(letter) {
		switch(letter) {
			case 'a': return 'n';
			case 'b': return 'o';
			case 'c': return 'p';
			case 'd': return 'q';
			case 'e': return 'r';
			case 'f': return 's';
			case 'g': return 't';
			case 'h': return 'u';
			case 'i': return 'v';
			case 'j': return 'w';
			case 'k': return 'x';
			case 'l': return 'y';
			case 'm': return 'z';

			case 'n': return 'a';
			case 'o': return 'b';
			case 'p': return 'c';
			case 'q': return 'd';
			case 'r': return 'e';
			case 's': return 'f';
			case 't': return 'g';
			case 'u': return 'h';
			case 'v': return 'i';
			case 'w': return 'j';
			case 'x': return 'k';
			case 'y': return 'l';
			case 'z': return 'm';

			default: return letter;
		}
	}
}

var input = ["<html><head><p>blahblahbla%^&%%^&%%^&%%^&%hblah</p></head><body><p>Intro</p><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg%^&%^&^%&^))))()%^&%^&^%&^))))()%^&%^&^%&^))))() fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj punvaf ner nofbyhgryl nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati %^&%^&^%&^))))()wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre %^&%^&^%&^))))()%^&%^&^%&^))))()fnvq guna qbar ohg vs lbh chg ba lbhe gverf </p><p>it is frustrating that you have not put car chains yet... embarrassing...</p><p>orsber jvyy znxr lbhe yvsr jnl rnfvre</p><span>it is not that fun making tests sometimes, onlysometimes :)</span></body>"];
solve(input);