function solve(args){
	function replaceATag(str){
		/**
		 * Regex explained:
		 * ----------------
		 * *The solution is customized to work only with url's in the pattern `http://somewebsite.com`
		 * /(http:\/\/\w+\.\w+)/g					=> gets just the link
		 * /(<a href=)\w+(:\/\/)\w+(.)\w+>/g 		=> gets the link + the anchor tag
		 * /<\/a>/ 									=> gets the closing anchor tag
		 */

		// get the link and put it inside url tags
		link = "[URL href=" + str.match(/(http:\/\/\w+\.\w+)/g)[0] + "]"; 
		
		// replace anchor tags + link with the new generated link
		str = str.replace(/(<a href=)\w+(:\/\/)\w+(.)\w+>/g, link); 

		// replace the closing anchor tag with url tag
		str = str.replace(/<\/a>/g, "[/URL]");
		
		return str;
	}

	document.getElementById('results').innerHTML = replaceATag(args[0]);
	console.log(replaceATag(args[0]));
}

var args = 	['<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>'];
solve(args);