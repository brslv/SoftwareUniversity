var board, 
	clickCounter, 
	currentMarker, 
	clickedBtnId, 
	player,
	playerOneMoves,
	playerTwoMoves,
	winningCombos;

board = document.getElementById('board');
currentMarker = 'o';
clickCounter = 0;
playerOneMoves = [];
playerTwoMoves = [];

function announceTheWinner(p1, p2){
	if(p1.indexOf('btn1') > -1 && p1.indexOf('btn2') > -1 && p1.indexOf('btn3') > -1 ||
	   p1.indexOf('btn4') > -1 && p1.indexOf('btn5') > -1 && p1.indexOf('btn6') > -1 ||
	   p1.indexOf('btn7') > -1 && p1.indexOf('btn8') > -1 && p1.indexOf('btn9') > -1 ||
	   p1.indexOf('btn1') > -1 && p1.indexOf('btn4') > -1 && p1.indexOf('btn7') > -1 ||
	   p1.indexOf('btn2') > -1 && p1.indexOf('btn5') > -1 && p1.indexOf('btn8') > -1 ||
	   p1.indexOf('btn3') > -1 && p1.indexOf('btn6') > -1 && p1.indexOf('btn9') > -1 ||
	   p1.indexOf('btn1') > -1 && p1.indexOf('btn5') > -1 && p1.indexOf('btn9') > -1 ||
	   p1.indexOf('btn3') > -1 && p1.indexOf('btn5') > -1 && p1.indexOf('btn7') > -1){
		return 'Player one ("O") wins! Congrats!';
	}

	if(p2.indexOf('btn1') > -1 && p2.indexOf('btn2') > -1 && p2.indexOf('btn3') > -1 ||
	   p2.indexOf('btn4') > -1 && p2.indexOf('btn5') > -1 && p2.indexOf('btn6') > -1 ||
	   p2.indexOf('btn7') > -1 && p2.indexOf('btn8') > -1 && p2.indexOf('btn9') > -1 ||
	   p2.indexOf('btn1') > -1 && p2.indexOf('btn4') > -1 && p2.indexOf('btn7') > -1 ||
	   p2.indexOf('btn2') > -1 && p2.indexOf('btn5') > -1 && p2.indexOf('btn8') > -1 ||
	   p2.indexOf('btn3') > -1 && p2.indexOf('btn6') > -1 && p2.indexOf('btn9') > -1 ||
	   p2.indexOf('btn1') > -1 && p2.indexOf('btn5') > -1 && p2.indexOf('btn9') > -1 ||
	   p2.indexOf('btn3') > -1 && p2.indexOf('btn5') > -1 && p2.indexOf('btn7') > -1){
		return 'Player two ("X") wins! Congrats!';
	}

	return false;
}

var sayBye = function(){
	board.classList.add('hide');
	document.getElementById('container').innerHTML = '<div class="msg"><a href="ttt.html">&larr;</a></div>';
}

board.addEventListener('click', function(e){
	if(e.target && e.target.nodeName == "BUTTON"){
		clickCounter++;
		player = clickCounter % 2 == 0 ? 'player2' : 'player1';

		clickedBtnId = e.target.id;
		clickedBtn = document.getElementById(clickedBtnId);
		clickedBtn.innerHTML = currentMarker;
		clickedBtn.setAttribute('disabled', 'true');
		
		if(player === 'player1'){
			playerOneMoves.push(clickedBtnId);
		}else{
			playerTwoMoves.push(clickedBtnId);
		}

		currentMarker = currentMarker === 'o' ? 'x' : 'o';
		var hasWinner = announceTheWinner(playerOneMoves, playerTwoMoves);
		if(hasWinner){
			if(confirm(hasWinner + ' Try again?')){
				window.location.reload();
			}else{
				sayBye();
			}
		}

		// when the last button is clicked
		if(clickCounter === 9){
			if(!hasWinner){
				if(confirm('No winner this time. Try again?')){
					window.location.reload();
				}else{
					sayBye();
				}
			}
		}
	}
});